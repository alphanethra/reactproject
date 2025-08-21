const model=require('../Models/userschema')
const bcrypt=require('bcrypt');
const salt=10;
const LoginSignuphandler=async(req,res)=>
{
    let {username,useremail,userpassword,userrole}=req.body;
    userpassword=await bcrypt.hash(userpassword,salt);
    userrole=(userrole)?"Job Seeker":"Employee";
    try{
    await model.create(
        {
            username,
            useremail,
            userpassword,
            userrole
        }
    );
    res.send("Sucessfull");
    }
    catch(err)
    {
        console.log(err);
    }
}
    
module.exports=LoginSignuphandler;