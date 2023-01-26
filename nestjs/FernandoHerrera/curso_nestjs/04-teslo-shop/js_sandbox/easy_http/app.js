const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error,posts) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(posts);
//     }

// console.log(error, posts);
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error,post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }

// //console.log(error, post);
// });


// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Createpost
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error) {
        console.log(error);
        } else {
        console.log(post);
        }
        
});
