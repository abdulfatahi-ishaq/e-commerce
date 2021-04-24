// Imports Middlewares
let {express,dotenv, bodyParser, expressValidator,cookieParser} = require('./core/middlewares/imports');
let app = express();

//Usages

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

//Environment Variable 
dotenv.config();

//Initiate Connection to DB
require('./core/database/dbcon');

// Routes Middleware
app.use('/api',require('./routes/auth'));    //Auth Routes
app.use('/api',require('./routes/user'));    //User Routes
app.use('/api',require('./routes/category'));  //Category Routes
app.use('/api',require('./routes/product'));  //Category Routes

// Start Server
app.listen(process.env.port || process.env.PORT,()=>{
    console.log("Server started on port 3000:")
});