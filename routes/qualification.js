var express=require('express');
var router=express.Router();
var qualification=require('../Models/qualification');


router.get('/',function(req,res,next){

    qualification.getAllqualification(function(err,rows){
 
     if(err){
         res.json(err);
     }
     else{
         res.json(rows);
     } 
 
  });

});  

router.post('/',function(req,res,next){

    qualification.addqualification(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    qualification.deletequalification(req.params.id, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {

    qualification.updatequalification(req.params.id, req.body, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;
