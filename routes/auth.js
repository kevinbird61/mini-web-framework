const express = require( 'express' );
const router = new express.Router();

// user login - ulogin
router.post('/ulogin',function(req,res){
    // Get the information from req body
    console.log(`Username: ${req.body.username}, Passwd: ${req.body.passwd}`);
    // TODO: find the matching product_key from user account
    res.end(JSON.stringify({
        msg: "OK",
        product_key: "123456789"
    }));
})

module.exports = router;