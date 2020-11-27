var express=require('express');
var router=express.Router();
var present1=require('../Models/present');


router.get('/',function(req,res,next){

    present1.getAllpresent(function(err,rows){
 
     if(err){
         res.json(err);
     }
     else{
         res.json(rows);
     } 
 
  });

});  

router.post('/',function(req,res,next){

    present1.addpresent(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    present1.deletepresent(req.params.id, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {

    present1.updatepresent(req.params.id, req.body, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;



