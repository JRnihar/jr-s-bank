document.getElementById('deposite-button').addEventListener('click', function() {
    let depoInput = document.getElementById('deposite-input');
    let newDepoAmountText = depoInput.value;
    let newDepoAmount = parseFloat(newDepoAmountText);
    // console.log(depoAmount);

    let depoTotal = document.getElementById('depo-total');
    let preDepoAmountText = depoTotal.innerText;
    let preDepoAmount = parseFloat(preDepoAmountText);
    let newDepoTotal = preDepoAmount + newDepoAmount;
    depoTotal.innerText = newDepoTotal;

    // handle balance

    let prevTotal= document.getElementById('balance-total')
    let prevBalanceText= prevTotal.innerText;
    let prevBalanceAmount= parseFloat(prevBalanceText);
    let newBalanceTotal=prevBalanceAmount + newDepoAmount;
    prevTotal.innerText=newBalanceTotal;

 
    depoInput.value = " ";
})


document.getElementById('withdraw-button').addEventListener('click', function() {
    let withDrawInput = document.getElementById('withdraw-input');

 
    let newWithDrawAmountText =  withDrawInput.value;
    let newWithDrawAmount = parseFloat( newWithDrawAmountText);
    

    let withDrawTotal = document.getElementById('with-total');
    let preWithDrawAmountText = withDrawTotal.innerText;

   
    let preWithDrawAmount = parseFloat( preWithDrawAmountText);

    let newWithDrawTotal =  preWithDrawAmount +newWithDrawAmount;
    withDrawTotal.innerText = newWithDrawTotal;

    //handle balance

    let prevTotal= document.getElementById('balance-total')
    let prevBalanceText= prevTotal.innerText;
    let prevBalanceAmount= parseFloat(prevBalanceText);
    let newBalanceTotal=prevBalanceAmount -  newWithDrawAmount;
    prevTotal.innerText=newBalanceTotal;

 
    withDrawInput.value = " ";
})

