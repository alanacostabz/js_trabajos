///////////////////////////////////////////////////////////////////////////////////
// XHR Object Methods working with text


// document.getElementById('button').addEventListener('click', loadData);

// function loadData() {

    // Create an XHR Object
    //const xhr = new XMLHttpRequest();

    // Open
    //xhr.open('GET','data.txt', true);

    //console.log('READYSTATE', xhr.readyState);


    // Optional - Used for spinners/loaders
    // xhr.onprogress = function() {
    //     console.log('READYSTATE', xhr.readyState);   
    // }

    // xhr.onload = function() {
    //     console.log('READYSTATE', xhr.readyState);

    //      if(this.status === 200) {
    //        //console.log(this.responseText);
    //        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4); 
    //         console.log(this.responseText);
    // }
    // xhr.onerror = function() {
    //     console.log('Request error...');
    // }
    // xhr.send();

    // readyState values
        // 0: request not initalized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready

    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
//}









////////////////////////////////////////////////////////////////////////////
// Working with Ajax JSON

// document.getElementById('button1').addEventListener('click',loadCustomer);
// document.getElementById('button2').addEventListener('click',loadCustomers);

// // Load single customers
// function loadCustomer(e) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','customer.json',true);

//     xhr.onload = function() {
//         if(this.status === 200) {
//             //console.log(this.responseText);

//             const customer = JSON.parse(this.responseText);

//             const output = `
//             <ul>
//                 <li>ID: ${customer.id}</li>
//                 <li>Name: ${customer.name}</li>
//                 <li>Company: ${customer.company}</li>
//                 <li>Phone: ${customer.phone}</li>
//             </ul>
//             `;
//             document.getElementById('customer').innerHTML = output;
//         }
//     }
//     xhr.send();
// }



// // Load customers
// function loadCustomers(e) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','customers.json',true);



//     xhr.onload = function() {
//         if(this.status === 200) {
//             //console.log(this.responseText);

//             const customers = JSON.parse(this.responseText);
//             let output = '';
//             customers.forEach(function(customer){
//             output += `
//             <ul>
//                 <li>ID: ${customer.id}</li>
//                 <li>Name: ${customer.name}</li>
//                 <li>Company: ${customer.company}</li>
//                 <li>Phone: ${customer.phone}</li>
//             </ul>
//             `;
//             document.getElementById('customer').innerHTML = output;
//             });
            
//         }
//     }
//     xhr.send();
//}









///////////////////////////////////////////////////////////////////////////
// Chuck Norris Jokes Generator

// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//     const number = document.querySelector('input[type="number"]').value;

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    
//     xhr.onload = function() {
//         if(this.status === 200) {
//             const response = JSON.parse(this.responseText);
            
//             let output = '';

//             if(response.type === 'success') {
//                 response.value.forEach( function(joke) {
//                 output +=
//                 `<ul>
//                     <li>${joke.joke}</li>
//                 </ul>
//                 `;
//                 })
//             } else {
//                 output +=
//                 `<ul>
//                     <li>Something went wrong</li>
//                 </ul>
//                 `;
//             }

//             document.querySelector('.jokes').innerHTML = output;
//         }
//     }

//     xhr.send();
    

//     e.preventDefault();
// }












/////////////////////////////////////////////////////////////////////////////////////
// CALLBACK FUNCTION
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
// setTimeout(function() {
//     posts.push(post);
// },2000);
// } 

// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`; 
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

//function createPost(post, callback) {
function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong!');
            }
            
            //callback(); 
        },2000); 
    });
  
}
    
    function getPosts() {
        setTimeout(function() {
            let output = '';
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`; 
            });
            document.body.innerHTML = output;
        }, 1000);
    }

    createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(er){
        console.log(er);
    });
    


















