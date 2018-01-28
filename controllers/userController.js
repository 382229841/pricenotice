var query = require('../models/index');

var returnBody={
	status:200,
	msg:"",
	data:null
};
exports.register =function(req,res,next){
    var param = req.body;
    var sql_insert =`insert into user (id, account, password,nickname) values (0,'${param.account}','${param.password}','${param.account}')`;
    var sql_select =`select * from user where account='${param.account}'`;
    query(sql_select,function (err, results){
        if (err){
            throw err
       }else{
            if (results.length == 0) {
                query(sql_insert,function (err, results) {
                    if(err){
                        throw err
                    }else{
                        res.json({status:'200',msg:'PASS!',data:true});
                    }
                })
            } else {
                res.json({status:'201',msg:'FAIL',data:false});
            }
       }
    })
}