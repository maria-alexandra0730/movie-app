var express = require('express');
var router = express.Router();
var movies = require('../mocks/movies.json');
var quotes = require('../mocks/quotes.json');

var uuid = require('uuid').v4;

function prelaodMovies() {
  return movies.map(function (movie) {
    movie.id = uuid();

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    movie.description = randomQuote ? randomQuote.quoteText + "\n" + randomQuote.quoteAuthor : '<no description';

    return movie;
  })
}

movies = prelaodMovies();
router.get('/', function (req, res, next) {
  var page = parseInt(req.query.page) || 1,
    per_page = parseInt(req.query.per_page) || 10,
    filter = req.query.filter,
    output = movies;

  if (filter) {
    output = movies.filter(movie => {
      title = (movie && movie.Title);
      title = String(title || '');

      return title.toLowerCase().indexOf(filter.toLowerCase()) > -1
    });
  }

  startIndex = (page - 1) * per_page;
  var data = output.slice(startIndex, startIndex + per_page),
    total = output.length,
    totalPages = Math.floor(total / per_page);

  if (total % per_page > 0) {
    totalPages += 1;
  }

  setTimeout(() =>
    res.json({
      page,
      per_page,
      total_pages: totalPages,
      total,
      data
    }), 2 * 1000);
});

router.post('/', function (req, res, next) {
  const movie = req.body || {},
    id = uuid();

  movie.id = id;

  movies.push(movie);

  console.log(movie);
  res.json({
    success: true
  });
});

router.get('/:id?', function (req, res, next) {
  const id = req.params.id;

  if (!id) {
    return res.json({
      success: false,
      message: "No movie found",
      errCode: 112
    });
  }

  var movie = movies.filter(function (movie) {
    return movie.id === id;
  });

  if (!movie.length) {
    return res.json({
      success: false,
      message: "No movie found",
      errCode: 112
    });
  }

  res.json(movie);
});

module.exports = router;