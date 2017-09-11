const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // req.logout() is a function that is automatically attached to the request object by
  // passport. When we call, it takes the cookie that contains the user id, and kills the
  // id that's in there.

  // res.send(req.user) is sent back - to prove they're no loner signed in.
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
