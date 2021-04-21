let { mongoose } = require("../../middlewares/imports");
let {userSchema} = require("../schemas/user");

//Models
module.exports = {
    User: new mongoose.model("User", userSchema)
}