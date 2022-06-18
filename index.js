const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.json({name:'mozaffari'})
});

app.get('/path', (req,res)=>{
	res.json({name:'seyed'})
});

app.listen(8080);