const Item = require('../models/item');
const Category = require('../models/category');
module.exports = function (req, res, next) {
    Promise.all([Item.find({}), Category.find({})]).then((results) => {
        res.render('index', {
            title: 'Home Page',
            items: results[0],
            categorys: results[1],
        });
    });
};
