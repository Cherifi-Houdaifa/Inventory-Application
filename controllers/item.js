const Item = require('../models/item');
const Category = require('../models/category');
const { body, validationResult } = require('express-validator');

// /item/:id
exports.getItem = function (req, res, next) {
    Item.find({ _id: req.params.id })
        .populate('category')
        .exec()
        .then((result) => {
            res.render('getItem', { title: 'Item', item: result[0] });
        });
};

// /item/create
exports.getCreateItem = function (req, res, next) {
    Category.find({}).then((result) => {
        res.render('getCreateItem', {
            title: 'Create Item',
            categorys: result,
        });
    });
};

// /item/:id/update
exports.getUpdateItem = function (req, res, next) {
    Promise.all([Item.findById(req.params.id), Category.find({})]).then(
        (results) => {
            console.log(results[0]._id);
            res.render('getUpdateItem', {
                title: 'Update Item',
                item: results[0],
                categorys: results[1],
            });
        }
    );
};
// /item/:id/delete
exports.getDeleteItem = function (req, res, next) {
    res.render("getDeleteItem", {title: "Delete Item"});
};

// /item/create
exports.postCreateItem = [
    body('name').exists().isLength({ min: 1, max: 50 }),
    body('description').isLength({ max: 200 }),
    body('category')
        .exists()
        .custom((value) => {
            if (!Category.findById(value).count()) {
                throw new Error('Category does not exist');
            }
            return true;
        }),
    body('author').exists().isLength({ min: 1, max: 30 }),
    body('url').exists().isLength({ min: 1 }),
    function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            next(new Error('Invalid Data'));
        }

        const item = new Item({
            name: req.body.name,
            description: req.body.description || '',
            category: req.body.category,
            author: req.body.author,
            url: req.body.url,
        });
        item.save().then((result) => {
            res.redirect(result.appUrl);
        });
    },
];

// /item/:id/update
exports.postUpdateItem = [
    body('name').exists().isLength({ min: 1, max: 50 }),
    body('description').isLength({ max: 200 }),
    body('category')
        .exists()
        .custom((value) => {
            if (!Category.findById(value).count()) {
                throw new Error('Category does not exist');
            }
            return true;
        }),
    body('author').exists().isLength({ min: 1, max: 30 }),
    body('url').exists().isLength({ min: 1 }),
    function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            next(new Error('Invalid Data'));
        }

        Item.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            author: req.body.author,
            url: req.body.url,
        }).then((result) => {
            res.redirect(result.appUrl);
        });
    },
];

// /item/:id/delete
exports.postDeleteItem = function (req, res, next) {
    Item.findByIdAndDelete(req.params.id).then((result) => {
        res.redirect("/")
    })
};
