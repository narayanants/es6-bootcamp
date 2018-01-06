/**
 * filter  Helper:
 * ==============
 * 
 */


let products = [{
    name: 'cucumber',
    type: 'vegetable',
    quantity: 45,
    price: 299
}, {
    name: 'banana',
    type: 'fruit',
    quantity: 12,
    price: 99
}, {
    name: 'potato',
    type: 'vegetable',
    quantity: 52,
    price: 259
}, {
    name: 'orange',
    type: 'fruit',
    quantity: 42,
    price: 899
}];

let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
//console.log(filteredProducts);


let productsFiltered = products.filter((product) => {
    return product.type === 'fruit';
});
//console.log(productsFiltered);


/* Complex Example */

let complexFilter = products.filter((x) => {
    return x.type === 'vegetable' && x.quantity > 9 && x.price < 999;
});

console.log(complexFilter);


/* More Complex Example */

let post = {
    id: 4,
    title: 'NewPost'
};
let comments = [{
        postId: 4,
        content: 'awesome post'
    },
    {
        postId: 3,
        content: 'wow post'
    },
    {
        postId: 4,
        content: 'killer post'
    },
]


function commentForPost(post, comments) {
    return comments.filter((comment) => {
        return comment.postId === post.id;
    })
}

console.log(commentForPost(post, comments));