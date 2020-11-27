var express=require('express');
var router=express.Router();
var permanent=require('../Models/permanent');



router.get('/',function(req,res,next){

    permanent.getAllpermanent(function(err,rows){
 
     if(err){
         res.json(err);
     }
     else{
         res.json(rows);
     } 
 
  });

});

router.post('/',function(req,res,next){

    permanent.addpermanent(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    permanent.deletepermanent(req.params.id, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {

    permanent.updatepermanent(req.params.id, req.body, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;
 