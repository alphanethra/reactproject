const model=require('../Models/jobpostschema')
const jobposthandler=async (req,res)=>
{
    const {jobtitle,company,location,jobtype,salary,description}=req.body;
    console.log(jobtitle,company,location,jobtype,salary,description);
    await model.create(
        {
            jobtitle,
            company,
            location,
            jobtype,
            salary,
            description
        }
    );
}
const jobfindhandler=async(req,res)=>
{
    const data=await model.find();
    res.send(data);
}
module.exports={jobposthandler,jobfindhandler};