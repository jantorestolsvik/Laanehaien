var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const uuid = require('uuid/v4');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var loans = [
    {
        amount: 123,
        interest: 0.46,
        paydownMonths: 12,
        id: uuid(),
        name: "loan 1",
    }
];

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

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);

module.exports = 'API running on port: ' + port;