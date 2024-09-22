function calculateMaturityAmount(){

    // Get input values from the form elements

    const principle = parseFloat(document.getElementById('principle').value);
    const intersRate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('time').value);

    // Perform the Calculation

    const maturityAmount = principle + (principle * intersRate * time)/100;

    // Display the Result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attach the event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);