const Router = require('express').Router();

Router.get('/alive', (req,res)=>{
	res.send("You hit the /api/rooms/alive");
	//do some sequelize calls to get alive rooms
})
Router.use('*',(req,res)=>{
	res.send({"options": "/alive"});
})


module.exports = Router;