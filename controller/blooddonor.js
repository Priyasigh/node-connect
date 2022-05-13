const donor = require('../models/blooddonor')
const service = require('../service/blooddonor.service')

 async function create(req,res,next){
  try{console.log(req.body)
  const {name,email,mobile,bloodGroup}=req.body
  if(!name && !email && !mobile && !bloodGroup) return res.json({error:'parameter missing!!',status:400})
  const data={name,email,mobile,bloodGroup}
  const result =  await service.create(data)
  return res.json(result)}
  catch(error){
    return res.json({error:'internal server error',status:500})
  }
}
module.exports = {create}