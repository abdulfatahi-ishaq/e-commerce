const Category = require("../core/database/models/category");

exports.categoryById = (req,res,next,id) => {
    Category.findById(id).exec((err,category)=>{
        if(err || !category){
            res.status(400).json({
                error:"Category Not Found"
            })
        }
        req.category = category;
        next()
    })
}; 

exports.create = (req,res) => {
    const category = new Category(req.body);

    category.save((err, category)=>{
        if(err){
            res.status(400).json({
                err:"Something went wrong"
            })
        }
        res.json({category});
    })
};

exports.read = (req, res) => {
    return res.json(req.category);
};

exports.remove = (req, res) => {
    let category = req.category;
    category.remove((err, result)=>{
        if(err || !result){
            return res.status(400).json({
                err:"Something Went Wrong"
            })
        }
        res.json({
            message:"Category Deleted Successfully!"
        })
    })
}

exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err,result)=>{
        if(err || !result){
            res.status(400).json({
                err:"Something Went Wrong"
            });
        }
        res.json({
            message:"Update Successful!"
        })
    })
}

exports.list = (req, res) => {
    Category.find().exec((err,result)=>{
        if(err || !result){
            res.status(400).json({
                error:"Category Not Found"
            })
        }
        res.json(result)
    })
}


