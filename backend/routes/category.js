let { express } = require("../core/middlewares/imports");
let router = express.Router();

const { isAuthorized } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { isAuth, isAdmin } = require("../core/middlewares/validator");
const {create, categoryById, read, remove,update,list} = require('../controllers/category');


router.post('/category/create/:userId', isAuthorized, isAuth, isAdmin, create);
router.get('/category/read/:categoryId',read);
router.delete('/category/:categoryId/:userId',isAuthorized, isAuth, isAdmin, remove);
router.put('/category/:categoryId/:userId',isAuthorized, isAuth, isAdmin, update),
router.get('/category/categories', list),

router.param('userId',userById);
router.param('categoryId',categoryById);

module.exports = router;
