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

function changeCalc (keyValue) {
    let currentVal = document.getElementById('visableNums');
    console.log(currentVal.innerText);
    if (currentVal.innerText == 0){
        currentVal.innerText = '';
    }
    switch(keyValue){
        case (1):
            currentVal.innerText += 1;
            break;
    }
}