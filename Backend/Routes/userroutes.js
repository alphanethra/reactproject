const express=require('express');
const router =express.Router();
const Signuphandler=require('../Controllers/Signuphandler');
const Loginhandler=require('../Controllers/Loginhandler');

router.post('/submit',Signuphandler);
router.post('/login',Loginhandler)
module.exports=router;