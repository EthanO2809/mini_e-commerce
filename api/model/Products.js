const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `
            SELECT ProductID, ProductURL,ProductTitle, ProductDescription, ProductPrice 
            FROM Products
        `
        db.query(query, (err, data) => {
            if (err) throw err;
            res.json({
              status: res.statusCode,
              results: data,
            });
          });
    }
    fetchProducts(req, res){
        const query = `
            SELECT ProductID, ProductURL,ProductTitle, ProductDescription, ProductPrice 
            FROM Products 
            WHERE ProductID = ${req.params.id}
        `
        db.query(query, (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req, res){
        const query = `
            INSERT INTO Products SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product inserted successfully"
            })
        })
    }
    removeProducts(req, res){
        const query = `
            DELETE FROM Products WHERE ProductID = ${req.params.ProductID}
        `
        db.query(query, [req.params.ProductID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"User record deleted successfully"
            })
        })
    }
    updateProduct(req, res){
        const query = `
            UPDATE Products SET ? WHERE ProductID = ${req.params.ProductID}
        `
        db.query(query, [req.params.ProductID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product record was updated succesfully"
            })
        })
    }
}

module.exports = Products