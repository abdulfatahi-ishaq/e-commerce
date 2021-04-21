let { mongoose } = require("../../middlewares/imports");
let {userSchema} = require("../schema");

//Models
module.exports = {
    User: new mongoose.model("User", userSchema)
}