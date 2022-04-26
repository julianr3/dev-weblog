const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment to Post
Comment.belongsTo(Post, {
  foreignKey: "post_id"
});

Post.hasMany(Comment, {
  foreginKey: "post_id"
});

// Comment to User
User.hasMany(Comment, {
  foreignKey: "user_id"
});

Comment.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Post, Comment };
