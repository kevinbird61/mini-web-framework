const express = require( 'express' );
const auth = require( './auth' );
const router = new express.Router();

// auth services 
router.use( '/user', auth );

module.exports = router;