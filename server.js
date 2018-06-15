const express = require('express');
const app = express();

app.listen(3000, () => console.log('app runnin on port 3000!!'));

module.exports = app;