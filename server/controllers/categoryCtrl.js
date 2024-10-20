const category = require("../models/categoryModel")

const categoryCtrl = {
    getCategories: async(req, res)=> {
    try {
        const categories = await category.find()
        res.json(categories)
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
    },
    createCategories: async (req, res) => {
        try {
            const { name } = req.body;
            const Category = await category.findOne({ name })
            
            if (Category) return res.status(400).json({ msg: "Category Already exist" })
            
            const newCategory=new category({name})
            await newCategory.save()
            res.json({msg:'category created'})
        } catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    deleteCategories: async (req, res) => {
        try {
            await category.findByIdAndDelete(req.params.id)
            res.json({msg:"Deleted a category"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    },
    updateCategories: async (req, res) => {
        try {
            const { name } = req.body;
            await category.findByIdAndUpdate({ _id: req.params.id }, { name })
            res.json({msg:"Updated"})
        } catch (err) {
            return res.status(500).json({msg:err.message})
        }
    }
}
module.exports=categoryCtrl