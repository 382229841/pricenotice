var env = process.env.NODE_ENV || 'development'
var config = require('../config/config')[env];
var mysql      = require('mysql');

// 连接共享型MySQL
var connection = mysql.createConnection(config.mysql);

/*connection.on('error', function(err){
	connection = mysql.createConnection(config.mysql);
});*/

var pool = mysql.createPool(config.mysql);  
//导出查询相关  
var query=function(sql,callback){    
    pool.getConnection(function(err,conn){    
        if(err){    
            callback(err,null,null);    
        }else{    
            conn.query(sql,function(qerr,vals,fields){    
                //释放连接    
                conn.release();    
                //事件驱动回调    
                callback(qerr,vals,fields);    
            });    
        }    
    });    
}; 
module.exports=query;