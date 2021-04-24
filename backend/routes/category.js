let { express } = require("../core/middlewares/imports");
let router = express.Router();

const { isAuthorized } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { isAuth, isAdmin } = require("../core/middlewares/validator");
const {create} = require('../controllers/category');


router.post('/category/create/:userId', isAuthorized, isAuth, isAdmin, create);

router.param('userId',userById);

module.exports = router;
