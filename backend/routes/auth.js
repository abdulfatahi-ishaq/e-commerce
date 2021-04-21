const { signup, signin, signout, isAuthorized } = require("../controllers/user/auth");
const { signupValidator } = require("../controllers/user/validator");
let { express, cookieParser } = require("../modules/imports");

let router = express.Router();

//Signup
router.post("/signup",signupValidator, signup);

//Signin
router.post("/signin",signin);

//Signin
router.get("/signout",isAuthorized,signout);
module.exports = router;
