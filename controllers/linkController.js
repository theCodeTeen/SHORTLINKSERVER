const Link = require("./../models/Link");
exports.getLink = async (req, res, next) => {
  try {
    if (!req.query.link) {
      return res.status(400).json({
        status: "fail",
        message: "link needs to be present in the query",
      });
    }

    const link = await Link.create({ link: req.query.link });

    res.status(200).json({
      status: "success",
      link: `http://${req.hostname}:${process.env.PORT}/${link._id}`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "opps! Something went wrong",
    });
  }
};
