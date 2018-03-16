const numbersAndSignsArray = []; // GLOBAL Array to hold the values for the calculations
const calcDisplay = '0';
let justPressedReturn = false;


// instantiate new tingle.js modal. Check out https://robinparisi.github.io/tingle/ for more info
const historyModal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: 'Close',
  cssClass: ['custom-class-1', 'custom-class-2'],
  onOpen() {
    console.log('modal open');
  },
  onClose() {
    console.log('modal closed');
  },
  beforeClose() {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  },
});


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
}()); // end of self-executing function ()

// function to add the number or sign && new line to the display
function changeCalc(keyValue) {
  justPressedReturn = false;
  const currentVal = document.getElementById('visibleNums');
  console.log(currentVal.innerText);
  if (currentVal.innerText === '0') {
    currentVal.innerText = '';
  }
  switch (keyValue) {
    case (1):
      currentVal.innerText += '1';
      break;
    case (2):
      currentVal.innerText += '2';
      break;
    case (3):
      currentVal.innerText += '3';
      break;
    case (4):
      currentVal.innerText += '4';
      break;
    case (5):
      currentVal.innerText += '5';
      break;
    case (6):
      currentVal.innerText += '6';
      break;
    case (7):
      currentVal.innerText += '7';
      break;
    case (8):
      currentVal.innerText += '8';
      break;
    case (9):
      currentVal.innerText += '9';
      break;
    case (0):
      currentVal.innerText += '0';
      break;
    case ('.'):
      if (currentVal.innerText === '') {
        currentVal.innerText += '0.';
      } else {
        currentVal.innerText += '.';
      }
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
    default:
      break;
  }
}

// function to set the display back to zero
function startOver() {
  const currentDisplay = document.getElementById('visibleNums');
  currentDisplay.innerHTML = '0';
}

function doTheMath() {
  // console.log(justPressedReturn);
  // get the visible numbers from the calculator
  const currentDisplay = document.getElementById('visibleNums');

  // set variable to hold the evaluated answer to the math problem
  const answer  = eval(currentDisplay.innerText);
  console.log(answer);
  // loop through the string and use RegEx to push whole values plus signs to numbersArray
  currentDisplay.innerHTML += `<hr> <line x1="20" y1="100" x2="100" y2="20"
  stroke-width="2" stroke="black"/> ${answer} `;
  pushToArray(currentDisplay.innerText);
  const calcView = document.getElementById('screen');
  calcView.scrollTop = calcView.scrollHeight;
  justPressedReturn = true;


  // put in a test <p> to see how the history would look on modal
  // const test = document.getElementById('test');
  // for (let i = 0; i < numbersAndSignsArray.length; i++) {
  //   if ((i + 1) % 3 === 0) {
  //     test.innerText += ` + ${numbersAndSignsArray[i]}`;
  //   } else {
  //     test.innerText += numbersAndSignsArray[i];
  //   }
  // }
}

function backspace() {
  // if last key pressed was return, alert button can't be used
  if (justPressedReturn === true) {
    alert("Can't use backspace right now");
    return;
  }

  const currentVal = document.getElementById('visibleNums').innerText;

  // if no other number has been entered, alert button can't be used
  if (currentVal === '0') {
    alert("Can't use backspace right now");
    return;
  }
  const newValue = currentVal.slice(0, currentVal.length - 1);
  console.log(newValue);
  document.getElementById('visibleNums').innerText = newValue;
}

function pushToArray(value) {
  // take the value from a line and push it to numbersAndSignsArray
  numbersAndSignsArray.push(value);
}

function showHistoryModal() {
  // historyModal.addFooterBtn('Exit', 'tingle-btn ', function () {
  //     historyModal.close();
  // });

  let currentHistory = document.getElementById("visibleNums").innerHTML;
  console.log(currentHistory);
  historyModal.setContent(`
    <h1>Here's your history 😲</h1>
    <hr>
    <p>${currentHistory}</p>
    `);


  historyModal.open();
}
