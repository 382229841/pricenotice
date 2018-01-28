module.exports = {
    development: {
	    mysql: {
	        host:"172.96.219.139",//process.env.MYSQL_HOST,
	        port:"3306",//process.env.MYSQL_PORT,
	        user:"root",//process.env.ACCESSKEY,
	        password:"123456",//process.env.SECRETKEY,
	        database:"app_amazon"//'app_' + process.env.APPNAME
	    }
	},
	product: {
	    mysql: {
	        host:"172.96.219.139",//process.env.MYSQL_HOST,
	        port:"3306",//process.env.MYSQL_PORT,
	        user:"root",//process.env.ACCESSKEY,
	        password:"123456",//process.env.SECRETKEY,
	        database:'app_amazon'
	    }
	}
}