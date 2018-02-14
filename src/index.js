const numbersArray = [];
let calcDisplay = '0';

(function () {
    // get a Node list of all of the buttons
    const buttonList = document.querySelectorAll('button');
    console.dir(buttonList);

    for (let i of buttonList) {
        console.log(i.id);
        i.addEventListener('click', function () {
            console.log('button press');
        })
    }


})(); // end of self-executing function ()

function changeCalc(keyValue) {
    let currentVal = document.getElementById('visableNums');
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