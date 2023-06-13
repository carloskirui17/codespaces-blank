const ul = document.querySelector('.ul');
const addBtn = document.getElementById('add_todo');
const input = document.querySelectorAll('input');


addBtn.addEventListener('click', () => {

    let todo = input[0].value;
    let li = document.createElement('li');
    li.textContent = todo;
    ul.appendChild(li);
    input[0].value = "";

    li.addEventListener('click', () => {
        if (li.classList.contains('completed')) {
            li.classList.remove('completed');
        }
        else {
            li.classList.add('completed');
        }
    })

    li.addEventListener('dblclick', () => {
        li.remove()
    })

})
