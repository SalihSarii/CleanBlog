const Post = require('../models/Post');

exports.addPost =async (req,res)=>{  
    await Post.create(req.body)
    res.redirect("/")
}

exports.getAllPosts =async (req,res)=>{
    const Posts = await Post.find({})
    res.render('index',{Posts})
}

exports.getPost =async (req,res)=>{
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
}

exports.updatePost = async (req,res) => {
    const post= await Post.findOne({_id: req.params.id})
    
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();

    res.redirect(`/posts/${req.params.id}`)
}

exports.deletePost = async (req,res) =>{
    const post =  await Post.findByIdAndDelete({_id:req.params.id})
    res.redirect('/')
}