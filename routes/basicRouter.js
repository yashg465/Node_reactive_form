var express=require('express');
var router=express.Router();
var basic=require('../Models/basic');


router.get('/',function(req,res,next){

   basic.getAllbasic(function(err,rows){

    if(err){
        res.json(err);
    }
    else{
        res.json(rows);
    } 

   });

});
router.get('/:id?', function(req, res, next) {

    basic.getbasicById(req.params.id, function(err, rows)
    {  
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 

 router.post('/',function(req,res,next){

    basic.addbasic(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    basic.deletebasic(req.params.id, function (err, rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {

    basic.updatebasic(req.params.id, req.body, function (err, rows){
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});





module.exports=router;