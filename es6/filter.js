
//// CLASSIC FOR LOOP - SELECTING PARTICULAR DATA
/// returning fruit products

var products = [{name: 'cucumber', type: 'vegetable'},
                {name: 'orange', type: 'fruit'},
                {name: 'celery', type: 'vegetable'},
                {name: 'pear', type: 'fruit'}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i ++ ) {
 	if (products[i].type === 'fruit') {
  filteredProducts.push(products[i]);
 }
}

filteredProducts;

//// AS A FILTERED HELPER
/// With filter - it filters data on an existing array.

products.filter(function(product) {
  return product.type === 'fruit';
});

///// ANOTHER FILTER ARRAY EXAMPLE

var products = [{name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
                {name: 'orange', type: 'fruit', quantity: 10, price: 15},
                {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
                {name: 'pear', type: 'fruit', quantity: 3, price: 5}
];


// type is vegetable, quantity is greater than 0, price is less than 10


products.filter(function(product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});


//// ANOTHER GOOD EXAMPLE
//Filter the array of users, only returning users who have admin level access.
//Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!

var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
 return user.admin === true;
});



//// ANOTHER EXAMPLE - not sure understanding this totally

var post = { id: 4, title: 'New Post'};
var comments = [
  { postId: 4, content: "awesome post"},
  { postId: 3, content: "it was ok"},
  { postId: 4, content: "neat"}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
		return comment.postId === post.id
  });
}

commentsForPost(post, comments);
