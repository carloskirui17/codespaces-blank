//Html local imports
const ul = document.querySelector('.ul');
const addBtn = document.getElementById('add_todo');
const input = document.querySelectorAll('input');

// This listens for a click event on the addBtn element
addBtn.addEventListener('click', () => {

    let todo = input[0].value; //saves the first input's value on page load as the todo value | input[0].value is the value of the first input
    let li = document.createElement('li'); //creates a new li element
    li.textContent = todo; // saves the li textContent as the todo variables value
    ul.appendChild(li); // appends the li element to the ul element as a child element
    input[0].value = ""; // sets the input value to an empty string

    //adds an event listener to the li element and waits for a click event  
    li.addEventListener('click', () => { 
        //checks if the li element contains  a class of 'completed'
        if (li.classList.contains('completed')) {
            //if true, removes the 'completed' class from the li element
            li.classList.remove('completed');
        }
        else {
            //if false, adds the 'completed' class to the li element
            li.classList.add('completed');
        }
    })

    // adds an event listener to the li element and waits for a double click event  
    li.addEventListener('dblclick', () => {
        //on click, removes the li element from the ul as a childNode
        li.remove()
    })

})
