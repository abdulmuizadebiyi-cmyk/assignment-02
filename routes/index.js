var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

/* GET Contact Me page. */
router.get('/contact', function(req, res) {
  res.render('contact');
});




module.exports = router;
