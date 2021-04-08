let { User } = require("../../core/database/models");

exports.signup = (req, res) => {
  console.log(req.body);
  // const user = new User(req.body);
  // user.save((err, user) => {
    // if (err) {
      // return res.status(400).json({ err });
      // console.log(err);
    // }
    // res.json({ user });
    // console.log(user);
  // });
};
