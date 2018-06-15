// scrape data
const cheerio = require('cheerio');
const request = require('request');
const axios = require('axios');

module.exports = fetchData = (uri) => {
    return axios.get(uri).then(body => {
        const tag = cheerio.load(body.data);
        const titleText = tag('.article-header').children('h1').text();
        const bodyText = tag('.article-copy').children('p').text();
        return {'title': titleText, 'text': bodyText};
    }).catch(err => console.log(err));
}