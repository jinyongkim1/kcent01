const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// pull a schema out of mongoose by getting a single argument
const User = mongoose.model("users");

// done is a callback that we call after we finished some work (common pattern that we see with passport)
// null => error object (set to null, as this is a straightforward process)
// unique identifier generated by mongo = user.id

// to reference the id that is generated by mongo, we don't have to look at _id.$oid, but we can
// just get access to this id in our serverside code by saying user.id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// turn id into a mongoose model instance. Take in cookies containing user id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          /* we don't have a user record with this ID, make a new record
                create new instance of the user model
                .save() -> take this model instance and save it to database (mongoDB) */
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
          // the above is an asynchronous operation (saving to the database)... don't want to
          // call done before we are sure that the user has been successfully saved to db
          // *usually consider the callback 'user' to be more refined: therefore used as than the first 'new User' when we made it"""
        }
      });
    }
  )
);