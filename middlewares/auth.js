const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  //authentication logic

  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    res.status(401).json({
      status: "authorization failed",
      message: "Fail,must logged in",
    });
    return;
  }

  //check auth header..
  const token = authorizationHeader.split("Bearer ")[1];
  try {
    const checkToken = jwt.verify(token, process.env.jwt_salt);
    req.user = checkToken;
  } catch (error) {
    res.status(401).json({
      status: "authorization failed",
      message: "Fail,must logged in",
    });
    return;
  }

  next();
};

module.exports = auth;
