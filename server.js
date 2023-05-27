const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res)=>{

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let ans  = num1 + num2;
    res.send("Answer: " + ans);
});

app.listen('3000', ()=>{
    console.log("listening on port 3000");
});