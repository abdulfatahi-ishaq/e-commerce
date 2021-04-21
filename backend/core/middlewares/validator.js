exports.signupValidator = (req, res, next) => {
  req
    .check("email", "Email should contain 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({ min: 4, max: 32 });
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  next();
};

//Authenticate Login with right user
exports.isAuth = (req,res, next) =>{
  let user = req.profile._id == req.auth._id;
  console.log(req.profile._id == req.auth._id)
  console.log(req.profile._id)
  console.log(req.auth._id)
  if(!user){
    return res.status(400).json({error:"Access Denied!"})
  }
  next();
};


//Authenticate has Admin
exports.isAdmin = (req,res, next) =>{
  // console.log(req.profile.role);
  if(req.profile.role === 0){
    return res.status(400).json({error:"Admin Resources! Access Denied"})
  }
  next()
};
