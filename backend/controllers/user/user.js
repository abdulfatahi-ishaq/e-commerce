let { User } = require("../../core/database/models");
let { bcrypt, jwt } = require("../../modules/imports");

exports.signup = (req, res) => {
  let { role, history, name, email, password, createdAt, updatedAt } = req.body;
  bcrypt.hash(password, 10, (err, hashedpassword) => {
    if (err) return res.status(400).json({ err });
    const user = new User({
      role,
      history,
      name,
      email,
      password: hashedpassword,
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

exports.signin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User does not exist"
      })
    }
    //Compare Password using bcrypt
    else if (user) {
       bcrypt.compare(password, user.password, (err, result) => {
        if (result === false) {
          return res.status(400).json({
            err: "Incorrect Password"
          })
        }
        //Generate signed token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_Secret);

        //Saved token with expiration time
        res.cookie("name", token, { expiry: new Date() + 9999 });

        //Destructure and return json response
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, name, email, role } })
      })
    }
  })
}

exports.signout = (req,res) => {
  res.clearCookie("name");
  res.json({message:"Sign out successful!"});
}
