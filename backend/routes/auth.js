const { signup, signin, signout } = require("../controllers/auth");
const { signupValidator } = require("../core/middlewares/validator");
let { express} = require("../core/middlewares/imports");

let router = express.Router();

//Signup
router.post("/signup",signupValidator, signup);

//Signin
router.post("/signin",signin);

//Signout
router.get("/signout",signout);

module.exports = router;
