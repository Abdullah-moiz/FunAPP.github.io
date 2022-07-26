const bodyparser = require('body-parser');
const express = require('express');
const fetch = require('cross-fetch');
const experss = require('express');
const router = express.Router();
const path = require('path')

let data;



 

router.get('/randomQuotes',(req,res)=>{
    res.render('randomQuotes',{data});
})
router.post('/generateQuotes',(req,res)=>{
    fetch('http://api.quotable.io/random').then(res => res.json()).then(data =>{
        res.render('randomQuotes',{data})
    })
})


router.get('/Findage',(req,res)=>{
    res.render('FindAge',{
        data
    })
})
router.get('/PredictGender',(req,res)=>{
    res.render('PredictGender',{
        data
    })
})

router.post('/getgender', (req, res) => {
    const name = req.body.name;
    console.log(name)
    try {
     fetch(`https://api.genderize.io?name=${name}`).then(res => res.json()).then(data => 
       {
        console.log(data.gender)
        res.render('PredictGender',{ data })
       });
    } catch (error) {
        console.log(error)
    }
})

router.post('/getage', (req, res) => {
    const name = req.body.name;
    console.log(name)
    try {
     fetch(`https://api.agify.io?name=${name}`).then(res => res.json()).then(data => 
       {
        console.log(data.age)
        res.render('FindAge',{ data })
       });
    } catch (error) {
        console.log(error)
    }
})

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;