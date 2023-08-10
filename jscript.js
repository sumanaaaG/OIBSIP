const calculate= document.getElementById('display');
function remove() {
    calculate.value = '';}
function change(value) {
    calculate.value += value;
}
function total() {
    try {
        calculate.value = eval(calculate.value);
    } catch (error) {
        calculate.value = 'Error';
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach(b => {
    b.addEventListener('click', () => {
        const buttonText = b.textContent;
        
        if (buttonText === '=') {
            total();
        } else if (buttonText === 'AC') {
            remove();
        } else {
            change(buttonText);
        }
    });
});
