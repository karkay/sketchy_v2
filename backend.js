const path = require('path');
const express = require('express');
const app = express();
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'dist' : 'public';

const api = require(path.join(__dirname,'src/routes'));

app.use(express.json());

app.use('/api',api);
app.use(express.static(path.join(__dirname, `src/${PATH_DIR}`)));

app.get('*',(req,res)=>{
	//might be in a client build rather than client dist while in prod
	console.log(`[GET]: /api*`);
	
	res.sendFile(path.join(__dirname, `src/${PATH_DIR}/index.html`));
});

app.listen(3000,()=>{
	console.log("Listening on port 3k!");
})