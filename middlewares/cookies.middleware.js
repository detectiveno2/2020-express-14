module.exports.createAndCountCookies = (req, res, next) => {
  if (!req.cookies.userId) {
    res.cookie("userId", 1);
    next();
  }
  let newValue = parseInt(req.cookies.userId);
  newValue += 1;
  res.cookie("userId", newValue);
  console.log(req.cookies);
  next();
};
