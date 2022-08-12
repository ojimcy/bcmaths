
module.exports = {
  ensureAdmin: function (req, res, next) {
    if (req.isAdmin()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};
