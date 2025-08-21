const model=require('../Models/userschema');
const bcrypt=require('bcrypt');
const Loginhandler=async(req,res)=>
{
    const{useremail,userpassword}=req.body;
    const data =await model.findOne({useremail:useremail});
    if(data && useremail==data.useremail)
    {
        const decryption=await bcrypt.compare(userpassword,data.userpassword);
        if(decryption)
        {
           res.send("true");
        }
        else
        {
            res.send("false");
        }
    }
    else
    {
        res.send("false");
    }
}
module.exports=Loginhandler;