const express = require('express');
const bodyparser = require('body-parser');
const myrouter = require('./router/router');
const app = express();
const port = 3305;
const { trim_all,trim_body,trim_params,trim_util } = require('request_trimmer');

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

    
app.use(express.json());
app.use(trim_all)
app.use('/',myrouter);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})