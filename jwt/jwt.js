const jsonwebtoken = require("jsonwebtoken");

const { sign, verify } = require("jsonwebtoken");

const createToken = (user) => {
  const accessToken = sign(
    { email: user.email, id: user.id },
    "jwtsecret"
  );

  return accessToken
};
