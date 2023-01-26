// Basic Structure
// (function(){
//     // Declare private variables and functions

//     return {
//         // Declare public variables and functions
//     }
// })();

// SATANDARD MODULE PATTERN
// const UICtrl = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const elements = document.querySelector('h1');
//         elements.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();



// REVEALING MODULE PATTERN
const ItemCtrl=(function(){
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name:'Alan'});
console.log((ItemCtrl.get(1)));
