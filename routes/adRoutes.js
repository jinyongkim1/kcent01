const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const adTemplate = require("../services/emailTemplates/adTemplate");

const Ad = mongoose.model("ads");

module.exports = app => {
  app.get("/api/ads/thanks", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/ads/webhooks", (req, res) => {
    const p = new Path("/api/ads/:adId/:choice");

    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const match = p.test(new URL(url).pathname);
        // if a match was found, return the object
        if (match) {
          return { email, adId: match.adId, choice: match.choice };
        }
      })
      /* making use of four lodash helpers: chain, map, compact, uniqBy
       chain: helps to loop through various logics. automatically send result of previous function
              as props to the next function.
       compact: iterate through array and get rid of undefined elements.
       uniqBy: only select unique elements (in terms of email and adId)
       value: add at the end of chain logic, thereby returning newly processed array */
      .compact()
      .uniqBy("email", "adId")
      .value();

    console.log(events);

    // tell sendgrid that website successfully got the request. sendgrid might send multiple requests
    // if it doesn't get response from server.
    res.send({});
  });

  app.post("/api/ads", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const ad = new Ad({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      const mailer = new Mailer(ad, adTemplate(ad));
      await mailer.send();
      await ad.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
