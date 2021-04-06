// Imports Middlewares
let {express,dotenv} = require('./modules/imports');
let app = express();

//Environment Variable 
dotenv.config();

//Initiate Connection to DB
require('./controllers/database/dbcon');

// Routes Middleware
app.use('/api',require('./routes/user'));    //User Routes

// Start Server
app.listen(3000,()=>{
    console.log("Server started on port 3000:")
});