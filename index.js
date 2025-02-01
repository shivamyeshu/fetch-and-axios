const express = require('express')
const axios = require('axios')

const app = express()

app.get('/',function(req,res,next){
    res.send('Hello World')
})

// using axios 

async function getPosts(){
    const post =await axios.get('https://jsonplaceholder.typicode.com/posts/2')
    return post.data
}

app.get('/post',async function(req,res){
    try{
        const post = await getPosts()
        res.json(post)
    }
    catch(err){
        res.status(500).send('Error fetching post')
    }
    }
)
app.listen(3000)

// using fetch
// async function getPosts(){
//     console.log( 'Fetching posts');
//     let post = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     let data = await post.json()
//     return data
// }

// app.get('/post2',async function (req,res){

//     const post = await getPosts()
//     res.json(post)

// })


// app.get('/posts',async function(req,res,next){
//     try{   const posts = await getPosts()
//         res.json(posts)
//     }
//     catch(err){
//         res.status(500).send('Error fetching posts')
//     }
//     }
// )

// app.get('/posts', async function (req, res, next) {
//     try {
//         const data = await getPosts() // Wait for the posts to be fetched
//         res.send(data) // Send the posts data to the client
//     } catch (err) {
//         res.status(500).send('Error fetching posts') // Handle any errors
//     }
// })


// app.listen(3000)
// app.listen(3000,()=>console.log('Server is running on port 3000'))

// app.listen(3000),()=>{console.log('Server is running on port 3000');
// }