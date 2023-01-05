import jwt_decode from "jwt-decode";

const TokenDecode = (token) => {
  return jwt_decode(token);
};

export default TokenDecode;