const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

// for anything that starts with /api
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
