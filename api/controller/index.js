const express = require("express");
const bodyParser = require("body-parser");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();

//import all model's objects
const { users, orders, Products } = require("../model");

//=======user's router=========
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});

routes.get("/user/:id", (req, res) => {
  users.fetchUsers(req, res);
});

routes.post("/register", bodyParser.json(), (req, res) => {
  users.registerUser(req, res);
});

routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});

routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});

routes.get("/Products", (req, res) => {
  Products.fetchProducts(req, res);
});
routes.get("/Products/:id", (req, res) => {
  Products.fetchProducts(req, res);
});
routes.post("/Products", bodyParser.json(), (req, res) => {
  Products.addProduct(req, res);
});
routes.patch("/Products/:id", bodyParser.json(), (req, res) => {
  Products.updateProduct(req, res);
});
routes.delete("/Products/:id", (req, res) => {
  Products.removeProduct(req, res);
});
// ============ Books' router ==============
// routes.get("/bookauthors", (req, res) => {
//   bookAuthors.fetchAuthors(req, res);
// });
// routes.get("/bookauthor/:id", (req, res) => {
//   bookAuthors.fetchAuthor(req, res);
// });
// routes.post("/addauthor", bodyParser.json(), (req, res) => {
//   bookAuthors.addAuthor(req, res);
// });
// routes.patch("/bookauthor/:id", bodyParser.json(), (req, res) => {
//   bookAuthors.updateAuthor(req, res);
// });
// routes.delete("/bookauthor/:id", (req, res) => {
//   bookAuthors.removeAuthor(req, res);
// });

// ============ Orders' router ==============
routes.get("/orders", (req, res) => {
  orders.fetchOrders(req, res);
});
routes.get("/order/:id", (req, res) => {
  orders.fetchOrder(req, res);
});
routes.post(
  "/addOrder/:orderID//:userID/:bookID",
  bodyParser.json(),
  (req, res) => {
    orders.insertOrder(req, res);
  }
);
routes.put("/order/:orderID", bodyParser.json(), (req, res) => {
  orders.updateOrder(req, res);
});
routes.delete("/order/:orderID", (req, res) => {
  orders.removeOrder(req, res);
});

module.exports = {
  express,
  routes,
  verifyAToken,
};
