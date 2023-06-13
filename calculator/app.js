
// Local imports from the html file
const btns = document.querySelectorAll('button');
const input = document.querySelector('.input');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('.clear');
const totalBtn = document.querySelector('.total');

// We are iterating through all the buttons in the html file
btns.forEach(btn => {

    // The we go on to giving an eventlistener to each button we find 
    btn.addEventListener('click', () => {
        var question;// This variable stores the question for easy access when needed
        var answer;// This variable stores the answer for easy result calculation 

        // If the button is not the total button, we add the button's text content to the input variables textContent
        if (!btn.classList.contains('total')) {
            input.textContent += btn.textContent;
            question = input.textContent;
        }
        // If the button is the total button, we calculate the answer and save it in the answer variable then we render it in the output variable
        if (btn.classList.contains('total')) {
            answer = eval(input.textContent);
            output.textContent = answer;
            input.textContent = 0;
        }

        // If the button is the clear button, we clear the input -> (question) and output -> (answer) variables
        if (btn.classList.contains('clear')) {
            input.textContent = '';
            output.textContent = '';
        }
    })
})

//The program ends here. 