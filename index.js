
const fs = require('fs');
const mongoose = require('mongoose');
const ap = require('./server');
const fetch_abcnews = require('./fetchData_abcNews');
const dbModel = require('./textSchema');
require('dotenv').config()


// connect to database
mongoose.connect(process.env.DB).then(() => {
   console.log('connected to databse');
})

ap.get('/', (req, res) => {
    console.log('works');
    res.json({stat: 'works'})
})

ap.post('/abcnews', (req, resp) => {
    const {title, text} = req.body;
    // save data
    // const saveData = (data) => {
        const article = new dbModel({
            title: data.title,
            text: data.text
        });
        article.save()
        .then(() => {
            console.log('data saved');
            res.status(200).json({status: 'saved'});
        })
        .catch(() => console.log('error in saving data'));
    // }
})
    


