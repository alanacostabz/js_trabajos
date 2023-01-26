const authrize = (req, res, next) => {
  const { user } = req.query;
  if (user === "rocio") {
    req.user = { name: "rocio", id: 2 };
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};

module.exports = authrize;
