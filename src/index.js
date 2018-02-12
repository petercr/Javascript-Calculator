const numbersArray = [];

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