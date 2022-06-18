const express = require('express');
const app = express();

app.get('/', (req,res)=>{
	res.json({name:'mozaffari'})
});

app.listen(8080);