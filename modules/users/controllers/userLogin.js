const userLogin = (req, res) => {
  res
    .status(200)
    .json({ status: "Hello user, are you sure you want to login ?" });
};

module.exports = userLogin;
