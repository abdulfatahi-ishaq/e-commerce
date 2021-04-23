const { mongoose } = require("../../middlewares/imports");

//Schemas
const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 32 }
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Category", categorySchema);
