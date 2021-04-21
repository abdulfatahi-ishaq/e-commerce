const { signup, signin, signout, isAuthorized } = require("../controllers/auth");
const { signupValidator } = require("../core/middlewares/validator");
let { express, cookieParser } = require("../core/middlewares/imports");

let router = express.Router();

//Signup
router.post("/signup",signupValidator, signup);

//Signin
router.post("/signin",signin);

//Signin
router.get("/signout",isAuthorized,signout);
module.exports = router;
