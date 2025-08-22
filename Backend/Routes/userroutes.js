const express=require('express');
const router =express.Router();
const Signuphandler=require('../Controllers/Signuphandler');
const Loginhandler=require('../Controllers/LoginHandler');
const {jobposthandler,jobfindhandler}=require('../Controllers/jobposthandler')

router.post('/submit',Signuphandler);
router.post('/login',Loginhandler);
router.post('/post',jobposthandler);
router.get('/find',jobfindhandler);
module.exports=router;