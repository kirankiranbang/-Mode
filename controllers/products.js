const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-products', {
    pageTitle: 'Add Products',
    path: '/admin/add-products',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log('req.body.title:', req.body.title); // Check the value of req.body.title

  const product = new Product(req.body.title);
  product.save();
  console.log(req.body);

  res.redirect('/');
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      productCSS: true,
      activeShop: true
    });
  });
};
