var db=require('../dbConnection'); //reference of dbconnection.js file

var skill={

    getAllskill:function(callback){

        return db.query('select * from skill',callback);
    },

    getSkillById:function(id, callback)
       {
        return db.query("select * from skill where id=?",[id],callback);
       },

    addskill:function(skill,callback){

        return db.query("Insert into skill (id,skill_cat,skill,skill_level,is_current) values((select id from basic ORDER BY id DESC LIMIT 1),?,?,?,?)",[skill.skill_cat, skill.skill, skill.skill_level, skill.is_current],callback );

    },
    
    deleteskill:function(id,callback){

        return db.query('delete from skill where Id=?',[id],callback);
    },

    updateskill:function(id,skill_cat,callback){

        return db.query('update skill set skill_cat=?, skill=?, skill_level=?, is_current=? where id=?',[ skill.skill_cat, skill.skill, skill.skill_level, skill.is_current ,id],callback);
    }
    
};    


module.exports=skill;

    

