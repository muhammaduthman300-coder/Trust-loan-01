function calculateLoan() {
    // Get values from the input boxes
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const months = document.getElementById('months').value;

    // Check if all fields have numbers
    if (amount && interest && months) {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(months);

        // Standard Loan Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        // Show the result formatted as currency
        if (isFinite(monthly)) {
            document.getElementById('payment').innerHTML = "$" + monthly.toFixed(2);
        }
    }
}
