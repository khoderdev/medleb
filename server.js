const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(jsonServer.bodyParser);

// Custom middleware to handle drug creation
server.post('/drugs', (req, res, next) => {
  console.log('Creating a new drug. Request data:', req.body);

  // Perform logic for creating a new drug
  const { priceForeign, currencyForeign } = req.body;

  // Calculate convertToUSD
  const exchangeRates = {
    USD: 1,
    CAD: 0.72,
    EUR: 1.06,
    CHF: 1.11,
    DKK: 0.72,
    GBP: 1.21,
    SAR: 0.27,
    JOD: 1.41,
    LBP: 900,
  };

  const convertToUSD = priceForeign / exchangeRates[currencyForeign];

  // Calculate convertToLBP
  const priceInUSD = convertToUSD;
  const convertToLBP = (priceInUSD / exchangeRates.USD) * exchangeRates.LBP;

  // Add the calculated values to the request body
  req.body.convertToUSD = convertToUSD.toFixed(2);
  req.body.convertToLBP = convertToLBP.toFixed(2);

  // Continue with the JSON Server router
  next();
});

// Additional middleware to log requests and responses
server.use((req, res, next) => {
  console.log(`Received ${req.method} request for: ${req.url}`);
  console.log('Request Body:', req.body);
  next();
});

server.use((req, res, next) => {
  console.log(`Sent response for: ${req.method} ${req.url}`);
  next();
});

server.use(router);

const PORT = 3500;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
