const Category = require("../core/database/models/category");

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
}


