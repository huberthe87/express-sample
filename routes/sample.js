var express = require('express');
var router = express.Router();

/* GET items in all category. */
router.get('/category/all', function (req, res, next) {
    res.status(200).type('json').sendfile('json/category_all.json');
});

/* GET items of men. */
router.get('/category/men', function (req, res, next) {
    res.status(200).type('json').sendfile('json/category_men.json');
});

/* GET items of women. */
router.get('/category/women', function (req, res, next) {
    res.status(200).type('json').sendfile('json/category_women.json');
});

/* GET categories. */
router.get('/category', function (req, res, next) {
    res.status(200).type('json').sendfile('json/master_response.json');
});

/* GET item detail. */
router.get('/detail/*', function (req, res, next) {
    res.status(200).type('json').sendfile('json/detail.json');
});


module.exports = router;
