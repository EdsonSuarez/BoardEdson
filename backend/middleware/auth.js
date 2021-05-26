const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let jwtToken = req.header("Authorization");
  if (!jwtToken) return res.status(400).send("No hay token");
  jwtToken = jwtToken.split(" ")[1];

  if (!jwtToken) return res.status(401).send("No hay token");
  try {
    const payload = jwt.verify(jwtToken, "secretJWT");
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).send("Token no valido1111");
  }
};

module.exports = auth;
