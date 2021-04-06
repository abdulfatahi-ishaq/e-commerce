// Imports Middlewares
let {express,dotenv} = require('./modules/imports');
let app = express();

//Environment Variable 
dotenv.config();

//Initiate Connection to DB
require('./core/database/dbcon');

// Routes Middleware
app.use('/api',require('./routes/user'));    //User Routes

// Start Server
app.listen(process.env.port || process.env.PORT,()=>{
    console.log("Server started on port 3000:")
});