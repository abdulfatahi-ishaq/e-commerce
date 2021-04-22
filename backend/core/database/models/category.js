let { mongoose } = require("../../middlewares/imports");
let {categorySchema} = require("../schemas/category");

//Models
module.exports = {
    Category: new mongoose.model("Category", categorySchema)
}