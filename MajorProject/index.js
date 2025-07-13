const express = require('express');
const app = express();
const path = require('path');
// Middleware to parse JSON bodies
app.use(express.json());    
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
app.set('views',path.join(__dirname, '/views'));
//static files

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

//const method ovveide

const methodoverride = require('method-override')
app.use(methodoverride('_method'))


//middleware to for ejs templates
app.set('view engine', 'ejs');
const mongoose = require('mongoose');
// const Chat=require('./models/chat.js');

main().then(() => {
    console.log('Connected to MongoDB')
})
    .catch(err => console.log(err));
mongoose.set('bufferCommands', false);
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
const Listing=require("./models/listing")

// app.get("/testListening",async (req,res)=>{
//     let sampleList=new Listing({
//         title:"new villa",
//         description:"By the beach",
//         price:1200,
//         location:"Calanguyte,Goa",
//         country:"India",
//     })
//     await sampleList.save();
//     consolelog("sample was saved")
//     res.send("success")
// })