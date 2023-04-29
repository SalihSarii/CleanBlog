const express = require('express')
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const ejs = require("ejs");
const Post = require('./models/Post')
const pageController = require('./controllers/pageController')
const postController = require('./controllers/postController')

const app = express()

//CONNECT DB
//mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db')
mongoose.connect('mongodb+srv://Salihsari:869RY8JxsbtoOCd3@cluster0.byuoezb.mongodb.net/?retryWrites=true&w=majority')

//TEMPLATE ENGINE
app.set("view engine","ejs")

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
    methods: ['POST','GET']
  })) 

//ROUTES
app.get('/',postController.getAllPosts);
app.post('/posts',postController.addPost);
app.get('/posts/:id', postController.getPost);
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id', postController.deletePost)


app.get('/about',pageController.getAboutPage);
app.get('/add_post',pageController.getAddPage)
app.get('/posts/edit/:id',pageController.getEditPage)



const port= process.env.port || 5000;
app.listen(port,()=>{
    console.log(`Server ${port} numarali portta çalisiyor... `)
})