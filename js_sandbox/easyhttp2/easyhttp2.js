/**
 * EasyHTTP Library
 * Library for maging HTTP requests
 * 
 *  @version 2.0.0
 *  @author Alan Acosta
 *  @license UNISON 
 * 
 **/

 class EasyHTTP {

    // Make an HTTP GET REQUEST
     get(url) {
         return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
         });
       
     }

     // Make an HTTP post request
     post(url,data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject(err))
        });
 }

 // Make an HTTP PUT rquest
PUT(url,data) {
    return new Promise((resolve, reject) => {
       fetch(url, {
           method: 'PUT',
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => resolve(data))
       .catch(err => reject(err))
    });
}

// Make an HTTP Delete Request
delete(url) {
    return new Promise((resolve, reject) => {
       fetch(url, {
           method: 'DELETE',
           headers: {
               'Content-type': 'application/json'
           },
       })
       .then(res => res.json())
       .then(() => resolve('Resource Deleted...'))
       .catch(err => reject(err))
    });
}
}

