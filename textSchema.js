const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const webArticle =  new Schema({
    title: String,
    text: String
});

const webArticleModel = mongoose.model('WebArticle', webArticle);


module.exports = webArticleModel;