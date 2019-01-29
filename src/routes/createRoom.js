const Router = require('express').Router();
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'dist' : 'public';
var fs = require('fs');
const path = require('path');




Router.get('*',(req,res)=>{
	// console.log(path.join(__dirname, `../${PATH_DIR}/adjectives.txt`));
	fs.readFile(path.join(__dirname, `../${PATH_DIR}/adjectives.txt`),(err,data)=>{
		data+='';
		var adjArr = data.split('\n');
		const randomAdj = adjArr[Math.floor(Math.random()*adjArr.length)];
		const randomSecondAdj = adjArr[Math.floor(Math.random()*adjArr.length)];

		fs.readFile(path.join(__dirname, `../${PATH_DIR}/animals.txt`),(err,animalData)=>{
		
			animalData+='';
			var animalsArr = animalData.split('\n');
			const randomAnimal = animalsArr[Math.floor(Math.random()*animalsArr.length)];
			const roomName = `${randomAdj}${randomSecondAdj}${randomAnimal}`;

			
			res.send(roomName);
		});
	});
	
})


module.exports = Router;