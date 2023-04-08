const express = require('express')
const mongoose = require('mongoose');
const ejs = require("ejs");
const Post = require('./models/Post')

const app = express()

//CONNECT DB
mongoose.connect('mongodb://127.0.0.1/cleanblog-test-db')

//TEMPLATE ENGINE
app.set("view engine","ejs")

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//ROUTES
app.get('/',async (req,res)=>{
    const Posts = await Post.find({})
    res.render('index',{Posts})
})

app.get('/posts/:id', async (req,res)=>{
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{    
    res.render('add_post')
})

app.post('/posts',async (req,res)=>{  
    await Post.create(req.body)
    res.redirect("/")
})

const port=5000;
app.listen(port,()=>{
    console.log(`Server ${port} numarali portta çalisiyor... `)
})