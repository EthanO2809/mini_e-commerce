//controller
const express = require("express");
const bodyParser = require("body-parser");
const routes = express.Router();

//import all model's objects
const { users } = require("../model");
const { Products } = require("../model");

//========== user's router ============
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});

routes.get("user/:id", (req, res) => {
  users.fetchUsers(req, res);
});

routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});

routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.removeUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

//========== book's router ============
routes.get("/Products", (req, res) => {
  Products.fetchProducts(req, res);
});
routes.get("/Products/:ProductID", (req, res) => {
  Products.fetchProduct(req, res);
});
routes.post("/Products", bodyParser.json(), (req, res) => {
  Products.addProduct(req, res);
});
routes.patch("/Products/:ProductID", bodyParser.json(), (req, res) => {
  Products.updateBook(req, res);
});
routes.delete("/Products/:ProductID", (req, res)=>{
    Products.removeProduct(req, res)
})

//========== end of routers ============
module.exports = { express, routes };
