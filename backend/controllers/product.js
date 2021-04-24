const {_,fs,formidable} = require('../core/middlewares/imports')
const Product = require("../core/database/models/product");

exports.productById = (req,res, next, id) => {
    Product.findById(id).exec((err,product)=>{
        if(err || !product){
            res.status(400).json({
                error:"Product Not Found"
            })
        }
        req.product = product;
        next()
    })
};

exports.read = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
};

exports.create = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.status(400).json({
                err:"Image Could Not Be Uploaded"
            })
        }

        let product = new Product(fields);
        console.log(product)
        // if(files.photo){
        //     product.photo.data = fs.readFileSync(files.photo.path);
        //     product.photo.contentType = files.photo.type;
        // }

        product.save((err, result)=>{
            if(err || !result){
                res.status(400).json({
                    err:"Something went wrong"
                })
            }

            res.json(result)
        })
    }) 
};

exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, result)=>{
        if(err || !result){
            return res.status(400).json({
                err:"Something Went Wrong"
            })
        }
        res.json({
            message:"Product Deleted Successfully!"
        })
    })
}

exports.update = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req,(err,fields,files)=>{
        if(err){
            res.status(400).json({
                err:"Image Could Not Be Uploaded"
            })
        }

        let product = req.product;
        product = _.extend(product,fields)

        product.save((err, result)=>{
            if(err || !result){
                res.status(400).json({
                    err:"Something went wrong"
                })
            }
            res.json({message:"Update Successful!"})
        })
    }) 
};