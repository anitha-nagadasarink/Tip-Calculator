
// Variable Declaration
var billAmountValue;
var finalBillValue;
var totalTipValue; 
var numberPeopleValue;
var tipForm = document.querySelector('.tip-form');
var personForm = document.querySelector('.tip-person-form');

var btns = document.querySelectorAll('.tip-value');
 btns.forEach(function(btn, i){
  btn.addEventListener('click', function(e){

     // Variable Initailization
     variableInit();

    //Getting value from Data Tip attribute
    var tipValue = e.target.getAttribute('data-tip');

     if((billAmountValue <= 0 && numberPeopleValue <= 0)){
      tipForm.classList.add('error-message');
      personForm.classList.add('error-message');   
     }  else if(billAmountValue <= 0){
       tipForm.classList.add('error-message');
     } else if(numberPeopleValue <= 0){
       personForm.classList.add('error-message');
     } else {
        tipForm.classList.remove('error-message');
        personForm.classList.remove('error-message');

        // Tip Calculation function call
        tipCalculation(e);
     
     }  
  });   
 });

//  Reset Button Values
var resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', function(){
  document.getElementById('total-bill').value = '';
  document.querySelector('.number-person').value = '';
  document.querySelector('.custom-input').value ='';
  totalTipValue.innerHTML = '0.0';
  finalBillValue.innerHTML = '0.0';

  tipForm.classList.remove('error-message');
  personForm.classList.remove('error-message');
});

// Custom value
var customInput = document.querySelector('.custom-input');

customInput.addEventListener('change', function(e){

  // Variable initailization
  variableInit();

 // Tip Calculation function call
  tipCalculation(e)
});

function variableInit(){
  billAmountValue = document.getElementById('total-bill').value;
  numberPeopleValue = document.querySelector('.number-person').value;
  finalBillValue = document.querySelector('.tip-total-amount');
  totalTipValue = document.querySelector('.tip-amount'); 
}

function tipCalculation(e){

 //Getting value from Data Tip attribute
    var tipValue =e.target.getAttribute('data-tip') > 0? e.target.getAttribute('data-tip'): e.target.value;

    var tipCalc = (billAmountValue * tipValue) / 100;  
    var tipForEach = tipCalc / numberPeopleValue;
    var billAmount = billAmountValue / numberPeopleValue;
    var totalBill = billAmount + tipForEach;

    // Display Data in DOM Elements
     totalTipValue.innerHTML = tipForEach.toFixed(2);
     finalBillValue.innerHTML = totalBill.toFixed(2);
}