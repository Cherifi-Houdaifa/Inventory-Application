const Category = require('../models/category');

exports.getCategory = function (req, res, next) {
    res.send(`Category: ${req.params.id}`);
};

// /category/create
exports.getCreateCategory = function (req, res, next) {
    res.send(`GET Create Category`);
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
exports.postCreateCategory = function (req, res, next) {
    res.send(`POST Create Category`);
};

// /category/:id/update
exports.postUpdateCategory = function (req, res, next) {
    res.send(`POST Update Category`);
};

// /category/:id/delete
exports.postDeleteCategory = function (req, res, next) {
    res.send(`POST Delete Category`);
};
