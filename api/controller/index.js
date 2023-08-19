// const db = require('../config')

// class Products{
//     fetchProducts(req, res){
//         const query = `
//             SELECT ProductID, ProductURL,ProductTitle, ProductDescription, ProductPrice 
//             FROM Products
//         `
//         db.query(query, (err, data) => {
//             if (err) throw err;
//             res.json({
//               status: res.statusCode,
//               results: data,
//             });
//           });
//     }
//     fetchProducts(req, res){
//         const query = `
//             SELECT ProductID, ProductURL,ProductTitle, ProductDescription, ProductPrice 
//             FROM Products 
//             WHERE ProductID = ${req.params.id}
//         `
//         db.query(query, (err, result)=>{
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 result
//             })
//         })
//     }
//     addProduct(req, res){
//         const query = `
//             INSERT INTO Products SET ?
//         `
//         db.query(query, [req.body], (err)=>{
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg: "Product inserted successfully"
//             })
//         })
//     }
//     removeProducts(req, res){
//         const query = `
//             DELETE FROM Products WHERE ProductID = ${req.params.ProductID}
//         `
//         db.query(query, [req.params.ProductID], (err)=>{
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg:"User record deleted successfully"
//             })
//         })
//     }
//     updateProduct(req, res){
//         const query = `
//             UPDATE Products SET ? WHERE ProductID = ${req.params.ProductID}
//         `
//         db.query(query, [req.params.ProductID], (err)=>{
//             if (err) throw err
//             res.json({
//                 status: res.statusCode,
//                 msg:"Product record was updated succesfully"
//             })
//         })
//     }
// }

// module.exports = {Products}

const express = require("express");
const {users, products} = require("../model");
const {verifyAToken} = require("../middleware/AuthenticateUser");
const routes = express.Router();
const bodyParser = require('body-parser')

routes.get("/users", (req, res)=>{
  users.fetchUsers(req, res)
})
routes.get("/user/:id", (req, res)=>{
  users.fetchUser(req, res)
})
routes.post("/login", bodyParser.json(), (req, res)=>{
  users.login(req, res)
})
routes.post("/register", bodyParser.json(), (req, res)=>{
  users.register(req, res)
})
routes.patch("/user/:id", bodyParser.json(), (req, res)=>{
  users.updateUser(req, res)
})
routes.delete("/user/:id", bodyParser.json(), (req, res)=>{
  users.removeUser(req, res)
})

routes.get("/Products", (req, res)=>{
  products.fetchProducts(req, res)
})
routes.get('/Products/:ProductID', (req, res)=>{
  products.fetchProduct(req, res)
})
routes.post("/Products", bodyParser.json(), (req, res)=>{
  products.addProduct(req, res)
})
routes.patch("/Products", bodyParser.json(), (req, res)=>{
  products.updateProduct(req, res)
})
routes.delete("/Products/:ProductID", (req, res)=>{
  products.removeProduct(req, res)
})

module.exports ={
  express,
  routes
}
