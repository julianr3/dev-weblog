const router = require('express').Router();
const apiRoutes = require('./api');
const Post = require('../models/Post');
const Comment = require('../models/Comment')
const User = require('../models/User')

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
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then((results) => {
        console.log(results)

        const allPosts = results.map((post) => post.get({plain: true}))

        console.log(allPosts)

        res.render("dashboard", {
            allPosts, 
            loggedIn:req.session.logged_in
        })
    })
})

router.get('/post/:id', (req, res) => {
    console.log(req.params.id)
    Post.findOne({
        where: {
            id: req.params.id
        }
        
    },{include: [User]})
    .then(async(result) => {
        const title = result ? result.title :"no post found"
        const content = result ? result.content :"no result found"
        const id = result ? result.id : "0"
        console.log(result.get({plain:true}))
        const user = await User.findOne({
            where: {
                id: result.user_id }
        })
        Comment.findAll({
            where: {
                post_id: req.params.id
            }
        })
        .then(resultComments => {
            const allComments = resultComments.map((post) => post.get({plain: true}))
            console.log(allComments)
            res.render("post", {
                loggedIn: req.session.logged_in,
                username: req.session.user,
                title: title,
                content: content,
                id: id,
                allComments,
                user
            })
        })

        
    })
})

router.get('/login', (req, res) => {
    res.render("login", {
        loggedIn:req.session.logged_in
    })
})


module.exports = router;
