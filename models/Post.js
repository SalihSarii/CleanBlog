const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create Schema
const PostSchema = new schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now()
    }
})

const Post = mongoose.model('Post',PostSchema)

module.exports = Post