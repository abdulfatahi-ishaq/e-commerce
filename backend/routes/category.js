let { express} = require("../core/middlewares/imports");
const { create } = require("../controllers/category");
let router = express.Router();

router.get("/category/create",create);

module.exports = router;
