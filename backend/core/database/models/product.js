const { mongoose } = require("../../middlewares/imports");
const { ObjectId } = mongoose.Schema;

//Schemas
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 32 },
    description: { type: String, required: true, maxlength: 2000 },
    price: { type: Number, required: true, trim: true, maxlength: 32 },
    category: { type: ObjectId, ref: "Category", required: true },
    quantity: { type: Number },
    photo: { data: Buffer, type: String },
    shipment: { required: false, type: Boolean },
    sold: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Product", productSchema);
