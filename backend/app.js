const {express,dotenv} = require('./modules/imports')

const app = express();

app.listen(3000,()=>{
    console.log("Server started on port 3000:")
});