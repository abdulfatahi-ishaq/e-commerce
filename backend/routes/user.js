let {express} = require('../modules/imports');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello from Node Again!");
})

module.exports = router;
