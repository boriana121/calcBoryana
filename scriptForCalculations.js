// function clickButtons () {
// 	document.getElementById("demo").onclick = function() {getInput()};
// }
window.onload = function(e) {
    var x = document.querySelectorAll('#numbersSection>input,#operatorsSection>input, #operatorForResult>input');
    //var i = 0;

    [].forEach.call(document.querySelectorAll('#numbersSection>input,#operatorsSection>input, #operatorForResult>input'), function myFunction(e) {

        e.onclick = function(itIsNumber, currentOperator, itIsNumber2, outPut, outPut2) {

            var self = this;
            itIsNumber = 0;
            outPut = document.getElementById("Output").innerHTML;
            outPut2 = document.getElementById("Output2").innerHTML;

            let alreadyChosenButtonSelf = self;
            let enteredNumbers = parseInt(itIsNumber);
            let GetNumber;
            let GetNumber2;
            let operatorEntered = /[^0-9]/g;
           //  let operatorEntered = 
            //= outPut.split(/-(.+)/)[1];
            let firstOperand = outPut.match(/[+-]?\d+(?:\.\d+)?/g);
            let enteredOperators = document.getElementById("yourInputOperator").value;
            let ifContainsoperator = outPut.match(operatorEntered);
            if (!isNaN(alreadyChosenButtonSelf.value) && enteredOperators) {
                //console.log("In");
                 document.getElementById("Output").innerHTML += enteredOperators;
                let itIsNumber2 = document.getElementById("yourInput2").value += self.value;
                GetNumber2 = parseInt(itIsNumber2);
                document.getElementById("Output2").innerHTML = GetNumber2;
                //firstOperand = parseInt(firstOperand.join(""));
                // if (enteredOperators) {
                //     document.getElementById("Output").value += itIsNumber;
                //     //outPut = "0" + outPut.slice(0,1);

                // }
            } else if (isNaN(alreadyChosenButtonSelf.value) || x < 1 || x > 10) {
                console.log("It's operator added");
                currentOperator = alreadyChosenButtonSelf.value;
                enteredOperators = document.getElementById("yourInputOperator").value = currentOperator;
                document.getElementById("Output").innerHTML += enteredOperators;
                document.getElementById("Output2").innerHTML = "";
                document.getElementById("yourInput2").value = null;
                if (enteredOperators && outPut && outPut2) {
                    console.log("IN");
                    ifContainsoperator = ifContainsoperator.pop();
                    //document.getElementById("yourInputOperator").value = null;

                    firstOperand = parseFloat(firstOperand.join(""));
                    outPut2 = parseInt(outPut2);
                    if (ifContainsoperator == "+") {
                        // console.log(firstOperand + outPut2);
                        document.getElementById("yourInput").value = firstOperand + outPut2;
                        document.getElementById("Output").innerHTML = firstOperand + outPut2;

                    } else if (ifContainsoperator == "-") {
                        //console.log(firstOperand - outPut2);
                        document.getElementById("yourInput").value = firstOperand - outPut2;
                        document.getElementById("Output").innerHTML = firstOperand - outPut2 + enteredOperators;
                    } else if (ifContainsoperator == "*") {
                        // console.log(firstOperand * outPut2);
                        document.getElementById("yourInput").value = firstOperand * outPut2;
                        document.getElementById("Output").innerHTML = firstOperand * outPut2 + enteredOperators;
                    } else if (ifContainsoperator == "/") {
                        // console.log(firstOperand * outPut2);
                         document.getElementById("yourInput").value = firstOperand / outPut2;
                        document.getElementById("Output").innerHTML = firstOperand / outPut2;
                        // document.getElementById("Output").innerHTML = ;
                    } else if (ifContainsoperator == ",") {
                        // console.log(firstOperand * outPut2);
                         document.getElementById("yourInput").value = firstOperand + outPut2*0.1;
                        document.getElementById("Output").innerHTML = firstOperand + outPut2*0.1;
                        // document.getElementById("Output").innerHTML = ;
                        if(enteredOperators) {
                        	document.getElementById("Output").innerHTML += enteredOperators;
                        }
                    }else {
                        // console.log(firstOperand / outPut2);
                        document.getElementById("yourInput").value = outPut2;
                        document.getElementById("Output").innerHTML = outPut2;
                        outPut2 = "";
                        enteredOperators = null;
                    }
                } else if (yourInput.value == 0  && enteredOperators ) {
                        document.getElementById("yourInput").value = 0;
                        document.getElementById("Output").innerHTML += "0"; 
                        //outPut = "0" + outPut.slice(0,1);

                    }else {

                }
                return outPut;


            } else {
                //itIsNumber += this.valueAsNumber;
                itIsNumber = document.getElementById("yourInput").value += self.value;
                GetNumber = parseInt(itIsNumber);
                document.getElementById("Output").innerHTML = GetNumber;

            }
            console.log(firstOperand, ifContainsoperator, GetNumber2);

        }
    });


}