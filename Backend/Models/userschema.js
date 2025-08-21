const mongo=require('mongoose');

const userschema=mongo.Schema(
    {
    username:
    {
        type:String
    },
    useremail:
    {
        type :String
    },
    userpassword:
    {
        type :String
    },
     userrole:
    {
        type :String
    }
    },
    {timestamps:true}
)

module.exports=mongo.model('UserInfo',userschema)