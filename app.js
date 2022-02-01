const express = require('express');
const app = express();

const hostname = "localhost";
const port = 3000;

app.get('/', (req, res)=> {
    res.send("Lab 0");
});

// Query String Parameters
// /pokemon?name=pikachu
app.get('/greet', (req, res)=> {

    let name = req.query.name;
    let year = parseInt(req.query.year);
    let curYear = new Date();
    let age = curYear.getFullYear()-year;
    res.send(`<h1>Hello, ${name}!\nYou are ${age} or ${age-1} years old.</h1>`);

});

// Route Parameters
// /pokemon/pikachu
app.get('/math/:number/:math/:number_', (req, res)=> {

    let number = parseInt(req.params.number);
    console.log(number);
    let number_ = parseInt(req.params.number_);
    console.log(number_);

    let math = req.params.math.toLowerCase();

    console.log(math);
    switch(math) {
        case "plus":
            res.send(`<h1> ${number + number_} </h1>`);
          break;
        case "minus":
            res.send(`<h1> ${number - number_} </h1>`);
          break;
        case "times":
            res.send(`<h1> ${number * number_} </h1>`);
          break;
        case "dividedby":
            res.send(`<h1> ${number / number_} </h1>`);
          break;
        default:
            res.send(`<h1> Please use a different wordle. </h1>`);
      }
});


app.listen(port, ()=> {
    console.log(`Listening on http://${hostname}:${port} ...`);
});