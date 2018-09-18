
//// FIND examples
/// AWARE!! - FIND ONLY FINDS THE FIRST TRUE RESULT. IT RETURNS ONLY ONE TRUE POSSIBILITY.
// IF THERE ARE DUPLICATES, FIND WILL ONLY RETURN ONE OF THEM, EVEN THOUGH THEY ARE THE SAME!

/// CLASSIC FOR LOOP EXAMPLE

var users = [
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Bill'}
];

var user;

for ( var i = 0; i < users.length; i++ ) {
 	if( users[i].name === 'Alex') {
     user = users[i];
  }
}

user;


//// SAME EXAMPLE AS ABOVE - ONLY USING FIND HELPER

var users = [
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Bill'}
];

users.find(function(user) {
  return user.name === 'Jill';
});

/// ANOTHER EXAMPLE

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin === true;
});


admin;


/// ANOTHER EXAMPLE

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account) {
   return account.balance === 12;
});

account;



/// ANOTHER EXAMPLE - understanding a bit vague

var posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" }
];

var comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
   return post.id === comment.postId;
  });
}

postForComment(posts, comment);
//returns = id: 1, title: 'New Post'
