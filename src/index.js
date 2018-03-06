const numbersArray = []; // GLOBAL Array to hold the values for the calculations
let calcDisplay = '0';
var justPressedReturn = false;

(function () {
    // get a Node list of all of the buttons
    const buttonList = document.querySelectorAll('button');
    console.dir(buttonList);

    // for (let i of buttonList) {
    //     console.log(i.id);
    //     i.addEventListener('click', function () {
    //         console.log('button press');
    //     })
    // }


})(); // end of self-executing function ()

// function to add the number or sign && new line to the display
function changeCalc(keyValue) {
    justPressedReturn = false;
    let currentVal = document.getElementById('visibleNums');
    console.log(currentVal.innerText);
    if (currentVal.innerText == 0) {
        currentVal.innerText = '';
    }
    switch (keyValue) {
        case (1):
            currentVal.innerText += 1;
            break;
        case (2):
            currentVal.innerText += 2;
            break;
        case (3):
            currentVal.innerText += 3;
            break;
        case (4):
            currentVal.innerText += 4;
            break;
        case (5):
            currentVal.innerText += 5;
            break;
        case (6):
            currentVal.innerText += 6;
            break;
        case (7):
            currentVal.innerText += 7;
            break;
        case (8):
            currentVal.innerText += 8;
            break;
        case (9):
            currentVal.innerText += 9;
            break;
        case (0):
            currentVal.innerText += 0;
            break;
        case ('.'):
            currentVal.innerText += '.';
            break;
        case ('+'):
            currentVal.innerText += ' + \ \n';
            break;
        case ('*'):
            currentVal.innerText += ' * \ \n';
            break;
        case ('/'):
            currentVal.innerText += ' / \ \n';
            break;
        case ('-'):
            currentVal.innerText += ' - \ \n';
            break;
    }
}

// function to set the display back to zero 
function startOver() {
    let currentDisplay = document.getElementById('visibleNums');
    currentDisplay.innerHTML = '0';
    
}

function doTheMath(){
    console.log(justPressedReturn);
    
    let currentDisplay = document.getElementById('visibleNums');
    let temp = eval(currentDisplay.innerText);
    // loop through the string and use RegEx to push whole values plus signs to numbersArray
    currentDisplay.innerHTML = currentDisplay.innerHTML + `<hr> ${temp} <br>`;
    justPressedReturn = true;
    
}

function backspace() {
    if (justPressedReturn === true){
        alert("Can't use backspace right now");
        return;
    }
    let currentVal = document.getElementById('visibleNums').innerText;
    let newValue = currentVal.slice(0, currentVal.length - 1);
    console.log(newValue);
    document.getElementById('visibleNums').innerText = newValue;
}