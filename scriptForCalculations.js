// function clickButtons () {
// 	document.getElementById("demo").onclick = function() {getInput()};
// }
window.onload = function(e) {
    var x = document.getElementById("numbers_and_operators").children;
    var i = 0;




    //let chosenButton = x[i].value;
    // document.getElementById("demo").onclick;
    // document.x.onclick = function() {
    //     window.popup('/map/', 300, 300, 'map');
    //     return false;
    // };




    // for (var i; i < x.length; i++) {
    //     let chosenButton = x[i].value;
    //     console.log(x[i].value)
    //     chosenButton.onclick = function() {
    //         this.style.color = "#ff0000";
    //     }
    // }
    [].forEach.call(document.getElementById('numbers_and_operators').children, function(e) {
        e.onclick = function(itIsNumber, currentOperator) {
            // this.style.display = "none";
            //console.log(this.value);
            
            let alreadyChosenButton = this.value;
            //let itIsNumber;// = document.getElementById("yourInput").value = this.value;
            //let currentOperator;
            //let repeatingNumber;
            //let output = itIsNumber + repeatingNumber;
            // let checkIfoperator;
            // if (isNaN(alreadyChosenButton) || x < 1 || x > 10) {
            if (isNaN(alreadyChosenButton) || x < 1 || x > 10) {
                console.log("It's operator added");
                //console.log(this.value);
                currentOperator = document.getElementById("yourInputOperator").value = this.value;

                
            } else {
            	itIsNumber = document.getElementById("yourInput").value += this.value;
            	let numberWihtOperator = itIsNumber + currentOperator; 
            	repeatingNumber = this.value + itIsNumber;
                // itIsNumber = document.getElementById("yourInput").value = this.value;
            }
            //console.log(output);
            console.log(repeatingNumber);
            // for (var i = alreadyChosenButton; i < alreadyChosenButton.length; i++) {
            //     // let chosenButton = x[i].value;
            //     console.log(alreadyChosenButton.length);
            //     // chosenButton.onclick = function() {
            //     //     this.style.color = "#ff0000";
            //     // }
            //     return alreadyChosenButton++;
            // }
            // alreadyChosenButton++;
            return (alreadyChosenButton);
        }
    });
}


// function checkifItsNum() {
//     var inputElement, text;

//     // Get the value of the input field with id="numb"
//     x = document.getElementById("yourInput").value;

//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//         text = x;
//     } else {
//         text = "";
//     }
//     document.getElementById("result").innerHTML = text;
// }
//getInput();