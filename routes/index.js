var express = require('express');
var router = express.Router();

const index = require('../controllers/index');
const itemController = require('../controllers/item');
const categoryController = require('../controllers/category');

// GET home page
router.get('/', index);

// GET create item
router.get('/item/create', itemController.getCreateItem);

// GET update item
router.get('/item/:id/update', itemController.getUpdateItem);

// GET delete item
router.get('/item/:id/delete', itemController.getDeleteItem);

// POST create item
router.post('/item/create', itemController.postCreateItem);

// POST update item
router.post('/item/:id/update', itemController.postUpdateItem);

// POST delete item
router.post('/item/:id/delete', itemController.postDeleteItem);

// GET Item
router.get('/item/:id', itemController.getItem);

// GET create Category
router.get('/category/create', categoryController.getCreateCategory);

// GET update Category
router.get('/category/:id/update', categoryController.getUpdateCategory);

// GET delete Category
router.get('/category/:id/delete', categoryController.getDeleteCategory);

// POST create Category
router.post('/category/create', categoryController.postCreateCategory);

// POST update Category
router.post('/category/:id/update', categoryController.postUpdateCategory);

// POST delete Category
router.post('/category/:id/delete', categoryController.postDeleteCategory);

// GET Category
router.get('/category/:id', categoryController.getCategory);

module.exports = router;
