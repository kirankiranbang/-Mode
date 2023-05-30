const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res,next) => {


    console.log('pathjoin from vcontact!');

    res.sendFile(path.join(__dirname,'../', 'views','vcontact.html')) 
 
});

module.exports = router;
