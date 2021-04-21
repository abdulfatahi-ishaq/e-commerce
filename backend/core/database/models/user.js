let { mongoose } = require("../../../modules/imports");
let {userSchema} = require("../schema");

//Models
module.exports = {
    User: new mongoose.model("User", userSchema)
}