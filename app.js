const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog);
    res.end();
})

const port=5000;
app.listen(port,()=>{
    console.log(`Server ${port} numarali portta çalisiyor... `)
})