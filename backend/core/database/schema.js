let { mongoose } = require("../../modules/imports");

//Schemas
module.exports = {
  userSchema: new mongoose.Schema({
    name: { type: String, required: true, trim: true, maxlength: 32 },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true, unique: true },
    role: { type: Number, default: 0 },
    history: { type: Array, default: [] },
  },{timestamps:true}),
};

//Models
module.exports = {
    user: new mongoose.model("User", this.userSchema)
}
