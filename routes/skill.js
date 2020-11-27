var express=require('express');
var router=express.Router();
var skill=require('../Models/skill');



router.get('/',function(req,res,next){

    skill.getAllskill(function(err,rows){
 
     if(err){
         res.json(err);
     }
     else{
         res.json(rows);
     } 
 
  });

});  

router.get('/:id?', function(req, res, next) {

    demo4.getSkillById(req.params.id, function(err, rows)
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

    skill.addskill(req.body, function(err,rows){
        
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {

    skill.deleteskill(req.params.id, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {

    skill.updateskill(req.params.id, req.body, function (err, rows){

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports=router;

