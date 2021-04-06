import {mongoose,dotenv} from '../modules/imports';

mongoose.connect(process.env.DATABASE,({useNewUrlParser:true,useCreateIndex:true})).then(()=>{
    console.log("DB Connected!");
})
