let { User } = require("../../core/database/models");

exports.signup = (req, res) => {
  let { name, email, password } = req.body;
  const user = new User({ name, email, password });
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err });
    }
    res.json({ user });
  });
};
