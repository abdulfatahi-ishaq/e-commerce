module.exports = {
  mongoose: require("mongoose"),
  express: require("express"),
  dotenv: require("dotenv"),
  bodyParser: require("body-parser"),
  morgan: require("morgan"),
  cookieParser: require("cookie-parser"),
  multer: require("multer"),
  bcrypt: require("bcryptjs"),
  expressValidator: require("express-validator"),
  expressJwt: require("express-jwt"), //Gene
  jwt: require("jsonwebtoken"), //Authorize User
  _:require('lodash'), 
  formidable : require('formidable'),
  fs : require('fs')
};
