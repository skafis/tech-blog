Meteor.publish('allPosts', function(){
    return Posts.find();
});

Meteor.publish('singlePost', function(id){
    return Post.find(id)
})