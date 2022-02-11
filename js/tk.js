function getInput(Input) {
    let inputField = document.getElementById(Input);
    let inputAmounttext = inputField.value;
    let amountvalue = parseFloat(inputAmounttext);
    inputField.value = " ";
    return amountvalue;
}

function updateField(totalFieldId, Amount) {
    let totalElement = document.getElementById(totalFieldId);
    let totalText = totalElement.innerText;
    let preTotal = parseFloat(totalText);
    totalElement.innerText = preTotal + Amount;
}

function getCurrentBalance() {
    let prevTotal = document.getElementById('balance-total')
    let prevBalanceText = prevTotal.innerText;
    let prevBalanceAmount = parseFloat(prevBalanceText);
    return prevBalanceAmount;
}

function updateBlance(amount, isAdd) {
    let prevTotal = document.getElementById('balance-total')
    const prevBalanceAmount = getCurrentBalance()
    if (isAdd == true) {
        prevTotal.innerText = prevBalanceAmount + amount;
    } else {
        prevTotal.innerText = prevBalanceAmount - amount;
    }
}



document.getElementById('deposite-button').addEventListener('click', function() {
    const newDepoAmount = getInput('deposite-input');

    if (newDepoAmount > 0) {
        updateField('depo-total', newDepoAmount);
        updateBlance(newDepoAmount, true);
    }

})


document.getElementById('withdraw-button').addEventListener('click', function() {
    const newWithDrawAmount = getInput('withdraw-input');


    const currentBalance = getCurrentBalance();
    if (newWithDrawAmount > 0 && newWithDrawAmount < currentBalance) {
        updateField('with-total', newWithDrawAmount);
        updateBlance(newWithDrawAmount, false);
    }

})