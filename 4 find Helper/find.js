/**
 * 
 * find Helper:
 * ============
 */

/* Simple Problem */

let users = [{
        name: 'Jill'
    }, {
        name: 'Alex'
    }, {
        name: 'Bill'
    }],
    user;

for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
    }
}


let user1 = users.find((user) => {
    return user.name === 'Alex';
});

console.log(user1);



/* little complex problem */

function Car(model) {
    this.model = model;
}

let cars = [
    new Car('BMW'),
    new Car('Audi'),
    new Car('Benz')
];


let models = cars.find((car) => {
    return car.model === 'Audi';
});

console.log(models);

/* Complex Problem */

let posts = [{
    id: 1,
    title: 'New Post'
}, {
    id: 2,
    title: 'Old Post'
}];

let comment = {
    postId: 1,
    content: 'Great Post'
};

function postForComment(posts, comment) {
    return posts.find((post) => {
        return post.id === comment.postId;
    });
}


console.log(postForComment(posts, comment));