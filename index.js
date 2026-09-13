const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');//that path is to collect the data
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);


app.get('/', (req, res) =>{
    res.send("Hello from Node API Server");
});

// app.get('/api/products', async (req,res) =>{//READ API ALL PRODUCTS
//   try {
//     const products = await Product.find({})
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// }); --> IT'S COMMENT BECAUSE ITS ALREADY ON ROUTER AND CONTROLLER

// app.get('/api/products/:id', async (req,res) =>{//READ PRODUCT ID
//   try {
//     const {id} = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// });


// app.post('/api/products', async (req,res) =>{//CREATE API & PRODUCTS
//   try {
//     const product = await Product.create(req.body);//this is to save the data that is collected to the database (mongoDB)
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// });

// app.put('/api/products/:id', async (req,res) =>{//Update a Product
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if(!product){
//       return res.status(404).json({message: "Product Not Found"});
//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })

// app.delete('/api/products/:id', async (req,res) =>{//Delete a Product
//   try {
//     const {id} = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if(!product){
//       return res.status(404).json({message: "Product Not Found"});
//     }
//     res.status(200).json({message: "Product deleted successfully"});
//   } catch (error) {
//     res.status(500).json({message: error.message})
//   }
// })


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database !")
    app.listen(3000, () =>{
      console.log("Server is running on port 3000");
    });
})
  .catch((error) =>{
    console.error("Connection Failed.")
    console.error(error)
  }); 