module.exports = (req, res, next) => {
  if(!req.user){
    return res.status(401).send({ error: 'You must log in' });
  }

  next();
};

// check if user is logged in - if yes, let this user continue on 
// to the actual request handler
