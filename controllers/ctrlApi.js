var query = require('../models/index');
var returnBody={
	status:200,
	msg:"",
	data:null
}
var accountCookieName="Ama-zon_U_S_E_R";
exports.login = function(req, res, next){	
	var account=req.body.userName;
	var password=req.body.password;
	//console.log(`select * from user where account='${account}' and password='${password}'`)
	query(`select * from user where account='${account}' and password='${password}'`,function(err,vals,fields){
		console.log(err)
		if(err){
			returnBody.msg="服务器异常，请重试！";
			returnBody.data=false;
			res.json(returnBody);
		}
		//console.log(vals)
		//console.log(fields)
		if(vals && vals.length>0){			
			//console.log(vals[0].id)
			res.cookie(accountCookieName, {name:account,id:vals[0].id}, { maxAge: 24*60*60*1000, httpOnly: true });
			returnBody.data=true;
		}else{
			returnBody.msg="用户名或密码错误";
			returnBody.data=false;
		}
		
		res.json(returnBody);
	});
}

exports.goodList = function(req, res, next){	
	var code=req.body.code;
	var userid=req.cookies[accountCookieName] ? req.cookies[accountCookieName].id : 0;
	var sql="";
	if(code){
		sql=`select * from goods where categery_code='${code}' and user_id='${userid}' order by noticeType,updatetime desc`;
	}else{
		sql=`select * from goods where user_id='${userid}' order by noticeType,updatetime desc`
	}
	//console.log(`select * from goods where categery_code='${code}' and user_id='${userid}'`)
	query(sql,function(err,vals,fields){
		//console.log(vals)
		if(err){
			returnBody.msg="服务器异常，请重试！";
			returnBody.data=false;
			res.json(returnBody);
		}
		//console.log(vals)
		//console.log(fields)
		if(vals && vals.length>0){
			returnBody.data=vals;
		}else{
			returnBody.msg="";
			returnBody.data=[];
		}
		
		res.json(returnBody);
	});
}
exports.updateMonitorStatus = function(req,res,next){
	var status=req.body.status;
	var ids=req.body.ids;
	var sql=`update goods set status = ${status} where  id in(${ids})`;

	query(sql,function(err,vals,fields){
		//console.log(vals)
		if(err){
			returnBody.msg="服务器异常，请重试！";
			returnBody.data=false;
			res.json(returnBody);
		}
		returnBody.msg="";
		returnBody.data=true;
		
		res.json(returnBody);
	});
}
exports.saveGoods = function(req,res,next){
	var id=req.body.id;
	var name=req.body.name;
	var url=req.body.url;
	var noticeType=req.body.noticeType;
	var expectPrice=req.body.expectPrice;
	var noticePhone=req.body.noticePhone;
	var userid=req.cookies[accountCookieName] ? req.cookies[accountCookieName].id : 0;
	var sql="";
	if(id=="0" || !id){
		sql=`insert into goods (name,url,noticeType,noticePhone,expectPrice,user_id) values ('${name}','${url}','${noticeType}','${noticePhone}','${expectPrice}','${userid}')`;
	}else{
		sql=`update goods set name='${name}',url='${url}',noticeType='${noticeType}',expectPrice='${expectPrice}',noticePhone='${noticePhone}' where id=${id}`;
	}
	console.log(sql)
	try{
		query(sql,function(err,vals,fields){
			//console.log(vals)
			if(err){
				returnBody.msg="服务器异常，请重试！";
				returnBody.data=false;
				res.json(returnBody);
			}
			returnBody.msg="";
			returnBody.data=true;
			
			res.json(returnBody);
		});
	}catch(e){
		returnBody.msg="服务器异常，请重试！";
		returnBody.data=false;
		
		res.json(returnBody);
	}
	
}
exports.deleteGoods = function(req,res,next){
	var id=req.body.id;
	var sql=sql=`delete from goods where id=${id}`;
	console.log(sql)
	try{
		query(sql,function(err,vals,fields){
			//console.log(vals)
			if(err){
				returnBody.msg="服务器异常，请重试！";
				returnBody.data=false;
				res.json(returnBody);
			}
			returnBody.msg="";
			returnBody.data=true;
			
			res.json(returnBody);
		});
	}catch(e){
		returnBody.msg="服务器异常，请重试！";
		returnBody.data=false;
		
		res.json(returnBody);
	}
	
}
exports.getCategories = function(req,res,next){	
	var sql=`select * from category`;

	query(sql,function(err,vals,fields){
		//console.log(vals)
		if(err){
			returnBody.msg="服务器异常，请重试！";
			returnBody.data=[];
			res.json(returnBody);
		}
		if(vals && vals.length>0){
			console.log(vals)
			var result=[{
			    "text":"产品库",
			    "iconCls":"icon-root",
			    "children":[]
			}]
			for(var i=0;i<vals.length;i++){
				var c={
			    		"iconCls":"icon-amazon",
				        "text":vals[i].name,
				        //"state":"closed",
				        "id":vals[i].id,
				        "code":vals[i].code,
				        "host":vals[i].host
				    }
				result[0].children.push(c);
			}

			returnBody.data=result;
		}else{
			returnBody.msg="";
			returnBody.data=[];
		}
		
		res.json(returnBody);
	});
}

exports.connStatus = function(req, res, next){	
	var account=req.body.userName;
	var password=req.body.password;
	console.log(`select * from user where account='${account}' and password='${password}'`)
	query(`select * from user where account='${account}' and password='${password}'`,function(err,vals,fields){
		//console.log(err)
		if(err){
			returnBody.msg="服务器异常，请重试！";
			returnBody.data=false;
			res.json(returnBody);
		}
		//console.log(vals)
		//console.log(fields)
		if(vals && vals.length>0){
			returnBody.data=true;
		}else{
			returnBody.msg="用户名或密码错误";
			returnBody.data=false;
		}
		
		res.json(returnBody);
	});
}