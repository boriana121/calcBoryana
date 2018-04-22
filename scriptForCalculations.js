// function clickButtons () {
// 	document.getElementById("demo").onclick = function() {getInput()};
// }
window.onload = function(e) {
    var x = document.querySelectorAll('#numbersSection>input,#operatorsSection>input, #operatorForResult>input');
    //var i = 0;

    [].forEach.call(document.querySelectorAll('#numbersSection>input,#operatorsSection>input, #operatorForResult>input'), function myFunction(e) {

        e.onclick = function(itIsNumber, currentOperator, itIsNumber2, outPut, outPut2) {

            var self = this;

            outPut = document.getElementById("Output").innerHTML;
            outPut2 = document.getElementById("Output2").innerHTML;
            itIsNumber2 = 0;
            let alreadyChosenButtonSelf = self;
            let enteredNumbers = parseInt(itIsNumber);
            let GetNumber;
            let GetNumber2;
            let operatorEntered = /[^0-9]/g;
            // outPut.split(/-(.+)/)[1];
            let firstOperand = outPut.match(/\d/g);
            let enteredOperators = document.getElementById("yourInputOperator").value;
            let ifContainsoperator = outPut.match(operatorEntered);
            if (!isNaN(alreadyChosenButtonSelf.value) && enteredOperators) {
                //console.log("In");
                let itIsNumber2 = document.getElementById("yourInput2").value += self.value;
                GetNumber2 = parseInt(itIsNumber2);
                document.getElementById("Output2").innerHTML = GetNumber2;
                firstOperand = parseInt(firstOperand.join(""));
                // if (outPut[0] == "-") {
                //     document.getElementById("yourInput").value = 0;
                //     //outPut = "0" + outPut.slice(0,1);
                    
                // }
            } else if (isNaN(alreadyChosenButtonSelf.value) || x < 1 || x > 10) {
                console.log("It's operator added");
                currentOperator = alreadyChosenButtonSelf.value;
                enteredOperators = document.getElementById("yourInputOperator").value = currentOperator;
                document.getElementById("Output").innerHTML += enteredOperators;
                document.getElementById("yourInput2").value = null;
                if (enteredOperators && outPut && outPut2) {
                    console.log("IN");
                    ifContainsoperator = ifContainsoperator.pop();
                    //document.getElementById("yourInputOperator").value = null;

                    firstOperand = parseInt(firstOperand.join(""));
                    outPut2 = parseInt(outPut2);
                    if (ifContainsoperator == "+") {
                        // console.log(firstOperand + outPut2);
                        document.getElementById("yourInput").value = firstOperand + outPut2;
                        document.getElementById("Output").innerHTML = firstOperand + outPut2 + enteredOperators;

                    } else if (ifContainsoperator == "-") {
                        //console.log(firstOperand - outPut2);
                        document.getElementById("yourInput").value = firstOperand - outPut2;
                        document.getElementById("Output").innerHTML = firstOperand - outPut2 + enteredOperators;
                    } else if (ifContainsoperator == "*") {
                        // console.log(firstOperand * outPut2);
                        document.getElementById("yourInput").value = firstOperand * outPut2;
                        document.getElementById("Output").innerHTML = firstOperand * outPut2 + enteredOperators;
                    } else if (ifContainsoperator == ",") {
                        // console.log(firstOperand * outPut2);
                        document.getElementById("yourInput").value = firstOperand * 0.1 + outPut2;
                        document.getElementById("Output").innerHTML = firstOperand * 0.1 + outPut2 + enteredOperators;
                        document.getElementById("Output2").innerHTML = null;
                        // document.getElementById("Output").innerHTML = ;
                    } else {
                        // console.log(firstOperand / outPut2);
                        document.getElementById("yourInput").value = firstOperand / outPut2;
                        document.getElementById("Output").innerHTML = firstOperand / outPut2;
                    }
                }
                return outPut;


            } else {
                //itIsNumber += this.valueAsNumber;
                itIsNumber = document.getElementById("yourInput").value += self.value;
                GetNumber = parseInt(itIsNumber);
                document.getElementById("Output").innerHTML = GetNumber;
                //  let numberWihtOperator = itIsNumber + currentOperator;
                //  repeatingNumber = self.value + itIsNumber;
                // itIsNumber = document.getElementById("yourInput").value = this.value;

            }
            // console.log(GetNumber);
            // console.log("This is first number: " + GetNumber);
            // console.log("Operator:" + ifContainsoperator);
            // console.log("This is second: " + GetNumber2);
            console.log(firstOperand, ifContainsoperator, GetNumber2);

        }
    });


}