/**
 * https://ceroideas.es/tipos-de-api-segun-su-funcion-y-tecnologia/
 * https://maplink.global/es/blog/como-usar-apis/
 * https://es.wikipedia.org/wiki/Web_API
 */


/**
 * XMLHttpRequest
 */
(() => {
    // 1. se instancia el objeto 
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();
    
    //console.log(xhr);

    // 2. asignar el o los eventos que se vayan
    // a manipular (lógica de programación)
    xhr.addEventListener('readystatechange', e => {
        if (xhr.readyState !== 4) return;
        // console.log(xhr);
        
        if (xhr.status >= 200 && xhr.status < 400) {
            //console.log('Éxito');
            //console.log(xhr.responseText);
            // convertir respuesta a json
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

                $xhr.appendChild($fragment);
            });
        } else {
            //console.log('Error');
            let message = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log('Este mensaje cargará de cualquier forma');
         
     });
    
    // 3. abrir la peticion establecer el método 
    // y el recurso o endpoint que se van acceder
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    //xhr.open('GET', 'assets/users.js');

    // 4. enviar la petición
    xhr.send();
    
})();


/**
 * API Fetch
 */
(() => {
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment();
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            //console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        })
        .then(json => {
            //console.log(json);
            //$fetch.innerHTML = json;
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

                $fetch.appendChild($fragment);
            });
        })
        .catch(err => {
            //console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
            
        })
        .finally(() => {
            //console.log('Esto se ejecutará independientemente del resultado de la Promes Fetch');
        });
})();

/**
 * API Fetch + Async-Await
 */
(() => {
 const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();
    

    async function getData() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();  
            
            //console.log(res, json);

            // if (!res.ok) {
            //     throw new Error('Ocurrió un error al solicitar los datos');
            // }

            if (!res.ok) throw { status: res.status, statusText: res.statusText };
              json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

                $fetchAsync.appendChild($fragment);
            });
        } catch (err) {
           //console.log(err);
             let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            //console.log('Esto se ejecutará independientemente del try... catch');
        }

        
    }
    
    getData();
    
})();


/**
 * AXIOS
 * https://github.com/axios/axios
 */

(() => {
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();
    
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            //console.log(res);
            let json = res.data;
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

                $axios.appendChild($fragment);
            });
        })
        .catch(err => {
            //console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            //console.log('Ésto se ejecutará independientemente del resultado de Axios');
        });
})();



/**
 * Axios + Async-Await
 */
(() => {
const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();
    
    

    async function getData() {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await res.data;  
            
            //console.log(res, json);
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);

                $axiosAsync.appendChild($fragment);
            });
        } catch (err) {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log('Esto se ejecutará independientemente del try...catch');
        }
    }

    getData();
})();