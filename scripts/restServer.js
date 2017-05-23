var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const uuid = require('uuid/v4');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var loans = [
  {
    id: uuid(),
    name: "loan 1",
    amount: 123
  }
];

var users = [
  {
    id: uuid(),
    username: "test",
    pw: "test"
  }
]

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res) {
  res.json(loans);
});

router.post('/', function (req, res) {
  console.log(req.body);
  const newLoan = req.body;
  newLoan.id = uuid();
  loans.push(newLoan);
  res.json({
    message: "saved",
    loan: newLoan
  })
});

router.post('/login', (req, res) => {
  console.log(req.body);
  const {
    pw,
    username
  } = req.body;
  const result = users.filter(function (user) { return user.username === username && user.pw === pw; });
  if (result.length > 0) {
    res.status(200).json({
      message: "Velkommen, " + username,
      username: result[0].username,
    })
  } else {
    res.status(400).json({
      message: "Feil brukernavn eller passord"
    })
  }
});

router.post('/signup', (req, res) => {
  const {
    pw,
    username
  } = req.body;
  
  const user = {
    id: uuid(),
    username,
    pw
  };

  if(user.pw.length > 1 && user.username.length > 1) {
    users.push(user);
    res.status(201).json({
      message: "Velkommen, " + username,
      user,
    })
  } else {
    res.status(400).json({
      message: "Din bruker må ha et brukernavn og passord som er lengere enn 1"
    }) 
  }
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);

module.exports = 'API running on port: ' + port;
