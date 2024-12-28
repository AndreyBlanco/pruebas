const path = require('path');

const home = (req, res) => {
    res.sendFile(path.join(__dirname,'../html/home.html'));
};

const hello = (req, res) => {
    res.send("Hello");
};

module.exports = {home, hello};