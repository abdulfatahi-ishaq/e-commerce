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

exports.list = (req,res)=>{
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 5;

    Product.find()
    .select('-photo')
    .populate('category')
    // .sort([[sortBy]])
    .sort([[sortBy,order]])
    .limit(limit)
    .exec((err,result)=>{
        if(err || !result){
            res.status(400).json({
                err:"Something Went Wrong"
            })
        }
        res.json(result)
    })
};

exports.listRelated = (req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 5;

    Product.find({_id:{$ne:req.product},category:req.product.category})
    .populate('category','_id name')
    .limit(limit)
    .exec((err,result)=>{
        if(err || !result){
            res.status(400).json({
                err:"Something Went Wrong"
            })
        }
        res.json(result)
    })
};

exports.listCategories = (req,res)=>{

    Product.distinct('category',{})
    .exec((err,result)=>{
        if(err || !result){
            res.status(400).json({
                err:"Something Went Wrong"
            })
        }
        res.json(result)
    })
};


exports.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Product.find(findArgs)
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
};

exports.photo = (req,res,next) =>{
    if(req.product.photo.data){
        res.set('Content-Type',req.product.photo.contentType);
        return res.send(res.product.photo.data)
    }
    next()
}