const btns = document.querySelectorAll('button');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('.clear');
const totalBtn = document.querySelector('.total');

btns.forEach(btn => {
    btn.addEventListener('click', () => {

        var question;
        var answer;

        if(!btn.classList.contains('total')) {
            input.textContent += btn.textContent;
            question = input.textContent;
        }

        if(btn.classList.contains('total')){
            answer = eval(input.textContent);
            output.textContent = answer;
            input.textContent = 0;
        }

        if(btn.classList.contains('clear')){
            input.textContent = '';
            output.textContent = '';
        }
    })
})

