

const express = require('express');
const path = require('path');

const port =process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public');
//console.log(__dirname + '/../public');

console.log(publicPath);

app = express();

//express static middleware
app.use(express.static(publicPath)  );


app.listen(port,() => { 
    
    console.log(`server is running on ${port} `);

});