var mysql = require("mysql");
var util = require("util");
var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"car_rent",
});

conn.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;