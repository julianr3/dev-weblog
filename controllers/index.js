const router = require('express').Router();
const apiRoutes = require('./api');
const Post = require('../models/Post');

router.use('/api', apiRoutes);

router.get('/hello', (req, res) => {
    res.send("Hi!")
})

router.get('/', (req, res) => {
    console.log('Hello')
    Post.findAll()
    .then((results) => {
        console.log(results)

        const allPosts = results.map((post) => post.get({plain: true}))

        console.log(allPosts)

        res.render("home", {
            allPosts
        })
    })

 
})

router.get('/signup', (req, res) => {
    res.render("signup")
})

module.exports = router;
