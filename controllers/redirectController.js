const Link = require("../models/Link");

exports.redirection = async (req, res, next) => {
  try {
    console.log("redirection ...");
    if (!req.params.id) {
      return next();
    }
    console.log("id=" + req.params.id);

    const link = await Link.findOne({ _id: req.params.id });

    if (!link) {
      return next();
    }
    console.log("link from db=" + link.link);

    console.log("finalling redirecting");
    return res.redirect(link.link);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: "fail",
      message: "opps, something went wrong!",
    });
  }
};
