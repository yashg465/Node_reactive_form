var db=require('../dbConnection'); //reference of dbconnection.js file

var qualification={

    getAllqualification:function(callback){

        return db.query('select * from qualification',callback);
    },

    addqualification:function(qualification,callback){

        return db.query("Insert into qualification (id,qualification,institute,passing_year,score) values((select id from basic ORDER BY id DESC LIMIT 1),?,?,?,?)",[qualification.id, qualification.qualification, qualification.institute, qualification.passing_year, qualification.score ],callback);
    },
    
    deletequalification:function(id,callback){

        return db.query('delete from qualification where Id=?',[id],callback);
    },

    updatequalification:function(id, qualification ,callback){

        return db.query('update experience set qualification=?, institute=?, passing_year=?, score=?, where id=?',[ qualification.qualification, qualification.institute, qualification.passing_year, qualification.score ,id],callback);
    }
    
};    


module.exports=qualification;
