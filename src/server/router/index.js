var express = require('express');
var router = express.Router();


//test api
var test = require('../controller/test');
router.get('/test', test.test);


module.exports = router;
