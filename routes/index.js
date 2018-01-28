/*var express = require('express');
var router = express.Router();*/

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
var pageTitle="海淘雷达";
var accountCookieName="Ama-zon_U_S_E_R";
var user={};
var preHandler=function(req,res,next){
	console.log('Cookies: ', req.cookies[accountCookieName])
	var isLogin=req.cookies[accountCookieName];
	if(isLogin){
		next();
		user=isLogin;
	}else{
		//console.log("....................."+JSON.stringify(req.url))
		res.redirect('/login?redirectUrl='+req.url);
		//next();
	}	
}
var preHandlerApis=function(req,res,next){
	var isLogin=req.cookies[accountCookieName];
	if(!isLogin){
		res.json({status:403,msg:'没有权限'});
	}else{
		next();
	}
}

module.exports = function(app){
	//pages
	app.get('/', preHandler,function(req, res, next) {
	  res.render('index', { title: pageTitle,user:user });
	});

	app.get('/login',function(req,res,next){
		res.cookie(accountCookieName, {name:''}, { maxAge: 0, httpOnly: true });
		res.render('login', { title: pageTitle });
	});



	//apis
	var ctlApi = require('../controllers/ctrlApi.js');
	var userController = require('../controllers/userController');
	app.post('/login',ctlApi.login);
	app.post('/register',userController.register);
	app.post("/apis/getTreeData",preHandlerApis,ctlApi.getCategories,function(req,res,next){
		
		var data={
			status:200,
			msg:"",
			data:[{
			    "text":"产品库",
			    "iconCls":"icon-root",
			    "children":[
			    	{
			    		"iconCls":"icon-amazon",
				        "text":"美国亚马逊",
				        "state":"closed",
				        "checked":true,
				        "children":[{
				        	"id":1,
				        	"iconCls":"icon-fresh",
				            "text":"only精华液",
				            "checked":true
				        }]
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"日本亚马逊",
				        "state":"closed",
				        "children":[{
				        	"id":2,
				        	"iconCls":"icon-fresh",
				            "text":"花王尿不湿",
				            "checked":true
				        }]
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"澳洲亚马逊"
				        
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"德国亚马逊"
				        
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"英国亚马逊"
				        
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"法国亚马逊"
				        
				    },{
				    	"iconCls":"icon-amazon",
				        "text":"意大利亚马逊"
				        
				    },{
				    	"iconCls":"icon-ebay",
				        "text":"eBay"
				        
				    }

				]
			}]
		}
		res.json(data);
	});
	app.post("/apis/getGoodList",preHandlerApis,ctlApi.goodList);
	app.post("/apis/updateMonitorStatus",preHandlerApis,ctlApi.updateMonitorStatus);
	app.post("/apis/saveGoods",preHandlerApis,ctlApi.saveGoods);
	app.post("/apis/deleteGoods",preHandlerApis,ctlApi.deleteGoods);
	app.post("/apis/connStatus",ctlApi.connStatus);
};
