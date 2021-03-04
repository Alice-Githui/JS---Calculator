//this is a function to show how the calculator stores data 
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement ){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear() // this function clears all outputs in our calculator function and returns the new values when the calculator is cleared
    }

    //all functions that can be taken by the calculator (define what the calculator can do)
    clear(){ 
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){ //this function is to allow the "adding" of a number whenever the user clicks on a number and it should take a number
      if (number === '.' && this.currentOperand.includes ('.'))return //if the value entered is a '.' or the number already entered has a '.' then nothing should be returned. This will prevent the period from being entered more than once. If there is no value to be returned after "return", then the function comparison automatically stops there
      this.currentOperand = this.currentOperand.toString() + number.toString(); //this takes the new number and appends it to the already existing number in the display. The values are converted to string so that they are not added up together rather they are concat -ed together to give the output i.e. '2' + '3' to give 23 not 5

    }

    chooseOperation(operation){ //this allows the user to choose any operation i.e +, -, * and ÷
        //if(this.currentOperand ==='')return //if the current Operand is equal to zero then it is ignored
        /*if(this.previousOperand !== ''){       //this function will compute the previous operands and return a value before the next operation is carried out 
            this.compute()                   

        }*/
        this.operation = operation; //so the calculator knows which operation it is on
        this.previousOperand = this.currentOperand //means that once we are done typing in the new number, it is recycled to the old number
        this.currentOperand = "" //this clears out the currentOperand value 

    }

    compute(){ //the calculator will compute the answer based on the inputs

    }

    updateDisplay(){ //the calculator will always update on the display section if any action is taken
        this.currentOperandTextElement.innerHTML = this.currentOperand;
        this.previousOperandTextElement.innerHTML = this.previousOperand; //means the previous operand should be equal to the previous operand and should therefore be displayed 

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[previous-operand]')
const currentOperandTextElement = document.querySelector('[current-operand]')

//define what our variables will do to the calculator
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => { 
    button.addEventListener('click', () =>{ //this means that whenever we click on the button, we want it to do something
        calculator.appendNumber(button.innerText) //the user should b able to add the inner number of the button (button.innerText) i.e. 1,2,3 when they click on the buttons
        calculator.updateDisplay() //the display area of the calculator will always be updated whenever the user clicks on a button




    })
})
//for the operation buttons
operationButtons.forEach(button => { 
        button.addEventListener('click', () =>{ 
            calculator.chooseOperation(button.innerText) 
            calculator.updateDisplay() 
    })
})
  