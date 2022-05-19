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
            allPosts, 
            loggedIn:req.session.logged_in
        })
    })

 
})

router.get('/signup', (req, res) => {
    res.render("signup", {
        loggedIn:req.session.logged_in
    })
})

router.get('/dashboard', (req, res) => {
    res.render("dashboard", {
        loggedIn:req.session.logged_in
    })
})

router.get('/login', (req, res) => {
    res.render("login", {
        loggedIn:req.session.logged_in
    })
})


module.exports = router;
