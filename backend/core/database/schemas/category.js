let { mongoose } = require("../../middlewares/imports");

//Schemas
module.exports = {
  userSchema: new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 32 },
  },{timestamps:true}),
};

