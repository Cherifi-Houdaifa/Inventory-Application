const Item = require("../models/item");

// /item/:id
exports.getItem = function (req, res, next) {
    res.send(`Item: ${req.params.id}`);
}

// /item/create
exports.getCreateItem = function (req, res, next) {
    res.send(`GET Create Item`);
}

// /item/:id/update
exports.getUpdateItem = function (req, res, next) {
    res.send(`GET Update Item`)
}
// /item/:id/delete
exports.getDeleteItem = function (req, res, next) {
    res.send(`GET Delete Item`)
}

// /item/create
exports.postCreateItem = function (req, res, next) {
    res.send(`POST Create Item`);
}

// /item/:id/update
exports.postUpdateItem = function (req, res, next) {
    res.send(`POST Update Item`)
}

// /item/:id/delete
exports.postDeleteItem = function (req, res, next) {
    res.send(`POST Delete Item`)
}