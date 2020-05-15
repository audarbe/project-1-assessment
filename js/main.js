/*----- constants -----*/

/*----- app's state (variables) -----*/
let inputVal;
let displayVal;


/*----- cached element references -----*/
const counter = document.getElementById('counter');
const inputField = document.getElementById('input-field');

/*----- event listeners -----*/
document.getElementById('plus-button').addEventListener('click', update);
document.getElementById('minus-button').addEventListener('click', update);

/*----- functions -----*/
function init(){
    inputVal = 0;
    displayVal = 0;
    render();
};

function update(event) {
    inputVal = parseInt(inputField.value);
    displayVal = (event.target.id === 'plus-button') ?
        displayVal = displayVal + inputVal :
        displayVal = displayVal - inputVal;
    render();
}

function render() {
    counter.innerText = displayVal;
    if (displayVal < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }
}

init();