const donormodel = require ("../models/blooddonor")

module.exports.create =async (data)=>{
    try{
       const result =  new donormodel(data)  
       return await result.save()
    }catch(error){
        return error
    }
}
