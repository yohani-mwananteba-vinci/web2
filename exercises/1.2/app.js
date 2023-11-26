var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var filmsRouter = require('./routes/films');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const stats = {};                                           //array d'obj qui va récupérer les requêtes http

app.use((req, res, next) => {
  const currentOperation = `${req.method} ${req.path}`;     //On récupère la requête HTTP actuelle (${req.method}) et son chemin (${req.path})
  const currentOperationCounter = stats[currentOperation];  //var qui indique la position actuelle de la requête dans le tb
  const myStats= {'GET /':1, 'GET /films': 3}               
  if (currentOperationCounter === undefined) stats[currentOperation] = 0; //s'il n'y a pas de requête, la requête dans le tb = 0
  stats[currentOperation] += 1;                                           
  const statsMessage = `Request counter : \n${Object.keys(stats)           //Msg qui renvoie les stats
    .map((operation) => `- ${operation} : ${stats[operation]}`) .join('\n')}`;
  console.log(statsMessage);
  next(); //On passe au Middleware suivant
});

app.use(express.static(path.join(__dirname, 'public')));


app.use('/films', filmsRouter);

module.exports = app;