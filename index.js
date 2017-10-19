const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require('body-parser');
const keys = require("./config/keys");
require("./models/User");
require("./models/Ad");
const passportConfig = require("./services/passport");

// requiring User before passport is vital: you're defining the schema
// inside the User.js file, and then utilizing it in the passport.js

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

/* app.use calls are wiring up middleware inside our application
 middleware: small functions that can be used to modify incoming requests
 to our app before they are sent off to route handlers */
// keys to encrypt cookie (not change Id)
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

const userController = require('./controllers/user');

app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);

app.get('/account', passportConfig.isAuthenticated, userController.getAccount);
app.post('/account/profile', passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post('/account/password', passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post('/account/delete', passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get('/account/unlink/:provider', passportConfig.isAuthenticated, userController.getOauthUnlink);

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/adRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
