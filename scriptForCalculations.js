// function clickButtons () {
// 	document.getElementById("demo").onclick = function() {getInput()};
// }
window.onload = function(e) {
    var x = document.getElementById("numbers_and_operators").children;
    //var i = 0;

    [].forEach.call(document.getElementById('numbers_and_operators').children, function myFunction(e) {

        e.onclick = function(itIsNumber, currentOperator,itIsNumber2) {
        	var self = this;
            let outPut = document.getElementById("Output").innerHTML;
            let alreadyChosenButtonSelf = self;
            let enteredNumbers = parseInt(itIsNumber);
            let enteredOperators;
            let GetNumber;
            let GetNumber2;
           // itIsNumber2 = document.getElementById("Output2").innerHTML;
            let ifContainsMinus = document.getElementById("Output").innerHTML.indexOf("-");
            if (isNaN(alreadyChosenButtonSelf.value) || x < 1 || x > 10) {
                console.log("It's operator added");

                currentOperator = alreadyChosenButtonSelf.value;
                enteredOperators = document.getElementById("yourInputOperator").value = currentOperator;
                document.getElementById("Output").innerHTML += enteredOperators;
                console.log(enteredOperators);
               // if (currentOperator) {
               // 	document.getElementById("yourInput").value = "";
               // }


            } else if(!isNaN(alreadyChosenButtonSelf.value) && ifContainsMinus > 0){
            	console.log("In");
            	let itIsNumber2 = document.getElementById("yourInput2").value += self.value;
                GetNumber2 = parseInt(itIsNumber2);
                document.getElementById("Output2").innerHTML = GetNumber2;
                //let numberWihtOperator = itIsNumber + currentOperator;
                //repeatingNumber = this.value + itIsNumber;
            	//document.getElementById("Output2").innerHTML = this.value;
            }else {
                //itIsNumber += this.valueAsNumber;
                itIsNumber = document.getElementById("yourInput").value += self.value;
                GetNumber = parseInt(itIsNumber);
                document.getElementById("Output").innerHTML = GetNumber;
                let numberWihtOperator = itIsNumber + currentOperator;
                repeatingNumber = self.value + itIsNumber;
                // itIsNumber = document.getElementById("yourInput").value = this.value;
            }
            console.log(GetNumber);
            console.log("This is first number: " + GetNumber);
            console.log("Operator" + ifContainsMinus);
            console.log("This is second: "+ GetNumber2);
               console.log(document.getElementById("Output").innerHTML);
              console.log(document.getElementById("Output2").innerHTML);


        }
    });


}

function SetDefault(e) {
    console.log("IN!");
    var x = document.getElementById("yourInputOperator");
    x.value = x.value.toUpperCase();

}