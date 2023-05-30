



////http://localhost:4000/admin/add-product



const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');
const path = require('path');


router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);

module.exports = router;





  
// res.sendFile(path.join(rootDir,'views','add-product.html'))  //http://localhost:4000/admin/add-product






//   router.get('/admin/shop', (req, res, next) => {      //http://localhost:4000/admin/shop

//     console.log('pathjoin from Admin.js!');

    

//     res.sendFile(path.join(__dirname,'../','views','shop.html'))  

// });




// router.get('/admin/vcontact', (req, res, next) => {      //http://localhost:4000/admin/vcontact

//     console.log('pathjoin from Admin.js');

//     res.sendFile(path.join(__dirname,'../','views','vcontact.html'))  




// });


