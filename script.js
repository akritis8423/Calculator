function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        
        //eval() is used to calculate the inserted value in display.

        document.getElementById('display').value = eval(document.getElementById('display').value);  

    } catch (error) {

        document.getElementById('display').value = 'Error';
    }
}
