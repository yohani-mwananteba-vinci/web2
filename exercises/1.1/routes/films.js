var express = require('express');
var router = express.Router();

const PROGRAM = [
    {
        id: 1,
        title: "Roi Lion",
        duration: 118 ,
        budget: 45000000,
        link: "https://www.imdb.com/title/tt0110357/"
    },

    {
        id: 2,
        title: "Shaolin Soccer",
        duration: 112 ,
        budget: 10000000,
        link: "https://www.imdb.com/title/tt0286112/"
    },

    {
        id: 3,
        title: "Jujutsu Kaisen 0",
        duration: 105 ,
        budget: 13.75000000,
        link: "https://www.imdb.com/title/tt14331144/"
    },
];



// Read all the films form the program
router.get('/', (req, res, next) => {
    
    console.log('GET /films');
    res.json(PROGRAM);
  });

module.exports = router;
