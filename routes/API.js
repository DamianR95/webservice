var express = require('express');
var router = express.Router();

var Database = require('../Database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Please specify a route.');
});

router.post('/insert', function(req,res){

  var data;
  if(req.body.data)
    data = JSON.parse(req.body.data);
  var objects;
  if(data)
    objects = data.objects;

  if(!data)
    return res.send({success: false, message: 'Please send an array  called data'});

  if(!isArray(objects))
      return res.send({success: false, message: 'Please send an array'});

  var result = Database.insert(objects);
  
  if(result.length == 0){
    return res.send({success: true, message: 'Rows added'});
  } else {
    var success = result.length == objects.length ? false : true;
    return res.send({success: success, message: 'Some rows have inconsistent data, we only accept [name, level, paid]', data: result });
  }

})

router.post('/get', function(req,res){
  res.send({objects: Database.get()})
})


function isArray(object){
  if(Object.prototype.toString.call(object) === '[object Array]'){
    return true;
  }

  return false;
}

module.exports = router;
