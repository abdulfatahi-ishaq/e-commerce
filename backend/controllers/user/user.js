let { User } = require("../../core/database/models");
let { bcrypt } = require("../../modules/imports");

exports.signup = (req, res) => {
  let { role, history, name, email, password, createdAt, updatedAt } = req.body;
  bcrypt.hash(password, 10, (err, hashedpassword) => {
    if (err) return res.status(400).json({ err });
    const user = new User({
      role,
      history,
      name,
      email,
      password : hashedpassword,
      createdAt,
      updatedAt,
    });
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({ err });
      }
      user.password = undefined;
      res.json({ user });
    });
  });
};
