const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post one' }
];

function getPosts() {
  setTimeout(() => {
    let ouput = '';
    posts.forEach((post, index) => {
      ouput += `${post.title}\n`;
    });
    console.log(ouput);
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}


createPost({ title: 'Post Thre', body: 'This is the post three' }, getPosts);