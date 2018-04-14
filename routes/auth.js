const express = require( 'express' );
const router = new express.Router();

// user login - ulogin
router.post('/ulogin',function(req,res){
    // Get the information from req body
    console.log(req.body.username);
    res.end(JSON.stringify({
        msg: "OK"
    }));
})

module.exports = router;