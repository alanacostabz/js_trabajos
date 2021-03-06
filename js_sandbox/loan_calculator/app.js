// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    // Hide results
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block'; 

    setTimeout(calculateResults,2000);


    e.preventDefault();
});


// Calculate results
function calculateResults(e) {
    console.log('Calculting');

    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

     const principal= parseFloat(amount.value);
     const calculateInterest = parseFloat(interest.value) / 100 / 12;
     const calculatePayments = parseFloat(years.value) * 12;

     //Compute the monthly payment
     const x = Math.pow(1 + calculateInterest, calculatePayments);
     const monthly = (principal * x * calculateInterest) / (x - 1);

     if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments) - principal).toFixed(2);
        
        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide loader
        document.getElementById('loading').style.display = 'none';
     } else {
        ShowError('Please check your numbers');
     }


    e.preventDefault();
}


// Show error
function ShowError(error) {
     // Show results
     document.getElementById('results').style.display = 'none';

     // Hide loader
     document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
     document.querySelector('.alert').remove();
}