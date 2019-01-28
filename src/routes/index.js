const Router = require('express').Router();
const rooms = require('./rooms');


Router.use('/rooms',rooms);

Router.use('*',(req,res)=>{
	res.send({"options": "/rooms"});
})


module.exports = Router;