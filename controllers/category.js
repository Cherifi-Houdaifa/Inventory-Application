const Category = require('../models/category');
const Item = require('../models/item');
const { body, validationResult } = require('express-validator');

// /category/:id
exports.getCategory = function (req, res, next) {
    Promise.all([
        Item.find({ category: req.params.id }),
        Category.find({ _id: req.params.id }),
    ]).then((results) => {
        res.render('getCategory', {
            title: 'Category',
            items: results[0],
            category: results[1][0],
        });
    });
};

// /category/create
exports.getCreateCategory = function (req, res, next) {
    res.render('getCreateCategory', { title: 'Create Category' });
};

// /category/:id/update
exports.getUpdateCategory = function (req, res, next) {
    res.send(`GET Update Category`);
};

// /category/:id/delete
exports.getDeleteCategory = function (req, res, next) {
    res.send(`GET Delete Category`);
};

// /category/create
exports.postCreateCategory = [
    body('name').isLength({ max: 15 }).notEmpty(),
    body('description').isLength({ max: 50 }).escape(),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new Error('An Error Happened'));
        }
        const category = new Category({ name: req.body.name, description: req.body.description || "" });
        category.save().then((result) => {
            console.log(result);
            res.redirect(category.appUrl);
        })
    },
];

// /category/:id/update
exports.postUpdateCategory = function (req, res, next) {
    res.send(`POST Update Category`);
};

// /category/:id/delete
exports.postDeleteCategory = function (req, res, next) {
    res.send(`POST Delete Category`);
};
