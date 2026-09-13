const Product = require("../models/product.model");

const getProducts = async (req,res) =>{//READ API ALL PRODUCTS
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProduct = async (req,res) =>{//READ PRODUCT ID
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createProduct = async (req,res) =>{//CREATE API & PRODUCTS
    try {
        const product = await Product.create(req.body);//this is to save the data that is collected to the database (mongoDB)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req,res) =>{//UPDATE A PRODUCT
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req,res) =>{//DELETE A PRODUCT
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
