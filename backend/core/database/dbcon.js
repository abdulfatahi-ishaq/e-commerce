let {mongoose} = require('../middlewares/imports');

mongoose.connect(process.env.DATABASE,({useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true})).then(()=>{
    console.log("DB Connected!");
})
