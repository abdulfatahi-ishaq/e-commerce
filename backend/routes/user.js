const { signup } = require("../controllers/user/user");
const { signupValidator } = require("../controllers/user/validator");
let { express } = require("../modules/imports");

let router = express.Router();

router.post("/signup",signupValidator, signup);

module.exports = router;
