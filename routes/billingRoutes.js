const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

// all the route handlers (app.get, app.post,...) take arbitrary no. of arguments
// so we can pass as many middlewares here as we want. The only requirement of
// express is that eventually, one of these functions has to process the request
// and eventually send back a response to the user.

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 offers",
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
