const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
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

  app.post('/api/ads/webhooks', (req, res) => {
    const p = new Path('/api/ads/:adId/:choice');

    const events = _.chain(req.body)
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname);
      if(match){
        return { email, adId: match.adId, choice: match.choice };
      }
    })
    .compact()
    .uniqBy('email', 'adId')
    .value();

    console.log(events);

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
