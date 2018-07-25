var express = require('express');
var router = express.Router();
var Event = require('../models/event'); //connects Events db Collection

router.get('/', function(req, res, next) {
  res.send('Nothing at the root route yet...');
});

router.post('/add', function(req, res, next) { //coming from '/events/add' or 'events/add' in teh front end

})

module.exports = router;
