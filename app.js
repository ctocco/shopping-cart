const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();
const secret = require("./config/environment");
const Cart = require("./models/cart");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("trust proxy", 1); // trust first proxy

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
);

app.use((req, res, next) => {
  console.log("Init cart: ", req.session.cart);
  req.session.cart = new Cart(req.session.cart);
  next();
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log("Server is listening on port:", PORT)); //
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
  .connect("mongodb://localhost:27017/productshop", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("you have connected to the DB");
  })
  .catch(() => {
    console.error("DB connection failed");
  });

module.exports = app;
