const Router = require('express').Router();

const rooms = require('./rooms');
const createRoom = require('./createRoom');



Router.use('/rooms',rooms);
Router.use('/createRoom',createRoom);

Router.use('*',(req,res)=>{
	res.send({"options": "/rooms"});
})



module.exports = Router;