const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
// requiring User before passport is vital: you're defining the schema
// inside the User.js file, and then utilizing it in the passport.js

mongoose.connect(keys.mongoURI);

const app = express();

/* app.use calls are wiring up middleware inside our application
 middleware: small functions that can be used to modify incoming requests to our app before
 they are sent off to route handlers */
//keys to encrypt cookie (not change Id)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
