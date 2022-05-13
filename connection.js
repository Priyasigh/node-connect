const mongoose = require('mongoose')
//MongoDB connection
mongoose.connect('mongodb://localhost/donatition', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})