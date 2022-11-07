const Link = require("../models/Link");

exports.redirection = async (req, res, next) => {
  try {
    if (!req.params.id) {
      return next();
    }

    const link = await Link.findOne({ _id: req.params.id });

    if (!link) {
      return next();
    }

    return res.redirect(link.link);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: "opps, something went wrong!",
    });
  }
};
