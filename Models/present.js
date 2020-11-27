var db=require('../dbConnection'); //reference of dbconnection.js file

var present={

    getAllpresent:function(callback){

        return db.query('select * from present',callback);
    },

    addpresent:function(present,callback){

        return db.query("Insert into present(id,present_address,city,country,state,district,pin) values((select id from basic ORDER BY id DESC LIMIT 1),?,?,?,?,?,?)",[present.id, present.present_address, present.city, present.country, present.state, present.district, present.pin ],callback);
    },
    
    deletepresent:function(id,callback){

        return db.query('delete from present where Id=?',[id],callback);
    },

    updatepresent:function(id, present_address,callback){

        return db.query('update present set present_address=?, city=?, country=?, state=?, district=?, pin=? where id=?',[ present.present_address, present.city, present.country, present.state, present.district, present.pin ,id],callback);
    }
    
};    


module.exports=present;

    

