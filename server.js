const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3001,() => console.log("server started at port 3001"));
