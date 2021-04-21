const { isAuthorized } = require("../controllers/auth");
const { userById } = require("../controllers/user");
let { express } = require("../core/middlewares/imports");

let router = express.Router();

router.get('/test/:userId',isAuthorized,(req,res)=>{
    res.json({
        user:req.profile
    })
})

router.param('userId',userById);

module.exports = router;
