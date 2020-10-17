var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  if (req.body.username === 'afi@me.com' && req.body.password === 'afi') {
    const response = { 'firstName': 'Afi', 'lastName': 'afi', 'token': 'jdkf4u489reh3489yf89374h9fh3y7fhe', 'role': 'family' };

    res.json(response);
    return;
    // setTimeout(() => {
    //   res.json(response);
    // }, 10 * 1000);
    // return;
  }

  res.status(403);
  res.json({
    message: 'Authentication error'
  });
});

router.post('/logout', function (req, res, next) {
  res.status(200);
  res.end();
});

module.exports = router;