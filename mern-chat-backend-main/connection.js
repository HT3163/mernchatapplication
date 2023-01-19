// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://HamzaTahir:9LIi7dToDJrmgppm@ecommerce.sltargt.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })

// mongoose can be used to connect mongodb with nodejs and expressjs
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017')  //qasim is database if not have any database than automatically created database with name qasim
// .then(()=>{ console.log('connection is on the success')})
// .catch((err)=>{console.log(err)})

const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(`mongodb+srv://HamzaTahir:9LIi7dToDJrmgppm@ecommerce.sltargt.mongodb.net/chatAppMern?retryWrites=true&w=majority`)
.then(()=>{ console.log('connection is on the success')})
.catch((err)=>{console.log(err)})
