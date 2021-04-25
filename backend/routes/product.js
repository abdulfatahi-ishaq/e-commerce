let { express } = require("../core/middlewares/imports");
let router = express.Router();

const { isAuthorized } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { isAuth, isAdmin } = require("../core/middlewares/validator");
const {create,productById,read,remove,update, list, listRelated,listCategories,listBySearch} = require('../controllers/product');

//CRUD
router.post('/product/create/:userId', isAuthorized, isAuth, isAdmin, create);
router.get('/product/read/:productId',read);
router.delete('/product/:productId/:userId',isAuthorized, isAuth, isAdmin, remove);
router.put('/product/:productId/:userId',isAuthorized, isAuth, isAdmin, update);

//Queries
router.get('/products',list);
router.get('/products/related/:productId',listRelated);
router.get('/products/categories',listCategories);
router.post('/products/search',listBySearch);

// Query by Params
router.param('userId',userById);
router.param('productId',productById);

module.exports = router;