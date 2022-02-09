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
    depoInput.value = " ";
})