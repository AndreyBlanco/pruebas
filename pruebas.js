var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Hola");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});