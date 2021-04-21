const { signup, signin, signout } = require("../controllers/user/user");
const { signupValidator } = require("../controllers/user/validator");
let { express } = require("../modules/imports");

let router = express.Router();

//Signup
router.post("/signup",signupValidator, signup);

//Signin
router.post("/signin",signin);

//Signin
router.get("/signout",signout);
module.exports = router;
