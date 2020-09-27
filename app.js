 // Number Input
 function numberClick(clickNumber){ 
    let inputNumber = clickNumber;

    let displayNumber = document.getElementById('screen');
    let displayValue = displayNumber.value;
   
    if (displayValue.length < 9){ 
        document.getElementById('screen').value += inputNumber;
    }
};

// Number Sum
function totalSum(){ 
    let sumNumber = document.getElementById('screen');
    let sumValue = sumNumber.value;
    document.getElementById('screen').value = eval(sumValue);

}



// BackSpace And Clear Button
function backSpaceBtn(del){ 
    let displayNumber = document.getElementById("screen");
    let displayValue = displayNumber.value;
    if(del == 'C'){ 
         document.getElementById('screen').value = '';
    }
    if(del == '<'){ 
        document.getElementById('screen').value = displayValue.slice(0, -1);
    }
};


