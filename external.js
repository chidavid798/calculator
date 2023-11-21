function appendNumber(number) {
   document.getElementById('display').value += number
}

function appendOperator(operator) {
   document.getElementById('display').value += operator
}

function appendDot() {
   var display = document.getElementById('display').value 
   // if () {
      
   // }
}

function calculate() {
   var display = document.getElementById('display').value;
   try {
      document.getElementById('display').value = eval(display);
   } catch (error) {
      document.getElementById('display').value = error;
   }
}


