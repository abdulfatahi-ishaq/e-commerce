let {mongoose} = require('../../modules/imports');

mongoose.connect(process.env.DATABASE,({useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true})).then(()=>{
    console.log("DB Connected!");
})
