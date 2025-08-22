const mongoose=require('mongoose');

const jobpost=mongoose.Schema(

    {
        jobtitle:
        {
            type:String
        },
        company:
        {
            type:String
        },
        location:
        {
            type:String
        },
        jobtype:
        {
            type:String
        },
        salary:
        {
            type:String
        },
        description:
        {
            type:String
        },
    },
        {
            timestamps:true
        }
    
);
module.exports=mongoose.model("jobpost",jobpost);