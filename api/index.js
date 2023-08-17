const cookieParser = require("cookie-parser");
const { express, routes } = require("./controller");
const path = require("path");
// const log = require('console');
const errorHandling = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3000;
const app = express();
const cors = require("cors");
// log("")

app.use(express.static('./static'),
  express.urlencoded({ 
    extended: false 
  }),
  cookieParser(),
  cors(),
  routes
  );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
})

routes.get("^/$|/mini e-com", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static/html/index.html"));
  }
);

// cookieParser & Router
// cookieParser should be set before router
app.use(cookieParser(), cors(), routes);
app.use(
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

// Handling all errors
app.use(errorHandling);

app.listen(port, () => {
  console.log(`You are listening on port ${port}`);
});