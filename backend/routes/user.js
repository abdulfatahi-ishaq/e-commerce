const { signup } = require('../controllers/user/user');
let {express} = require('../modules/imports');

let router = express.Router();

router.get('/signup',signup);

module.exports = router;
