const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;

//Middelware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend:true}))
app.set('view engine', 'ejs');

app.listen(PORT,()=>{
    console.log('listening in port',PORT);
})