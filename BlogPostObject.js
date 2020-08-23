// title
// body
// author
// views
// commnets
//      (author, body)
// isLive


// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     isLive: true
// };

// console.log(post);

let post = new Post('a', 'b', 'c');

console.log(post);


function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}