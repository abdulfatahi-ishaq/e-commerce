const { isAuthorized } = require("../controllers/auth");
const { userById } = require("../controllers/user");
let { express } = require("../core/middlewares/imports");
const { isAuth, isAdmin } = require("../core/middlewares/validator");

let router = express.Router();

router.get('/test/:userId',isAuthorized, isAuth,isAdmin,(req,res)=>{
    res.json({
        user:req.profile
    })
})

router.param('userId',userById);

module.exports = router;
