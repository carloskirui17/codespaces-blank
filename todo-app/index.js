const ul = document.querySelector('.ul');
const addBtn = document.getElementById('add_todo');
const input = document.querySelectorAll('input');

let li = document.createElement('li');
let xBtn = document.createElement('button');

addBtn.addEventListener('click', () => {
    let todo = input[0].value;
    xBtn.classList.add('delete');
    xBtn.textContent = "X";
    li.textContent = todo;
    ul.appendChild(li);
    li.appendChild(xBtn);
    input[0].value = "";
})



xBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
})