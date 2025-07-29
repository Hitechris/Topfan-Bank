document.getElementById('transferForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation (you can add more)
  const amount = document.getElementById('amount').value;
  if (parseFloat(amount) <= 0) {
    alert("Amount must be more than 0.");
    return;
  }
// Redirect to confirmation page
const from = document.getElementById('from').value;
const to = document.getElementById('to').value;
const accNum = document.getElementById('accNum').value;

const params = new URLSearchParams({
  from: from,
  to: to,
  accNum: accNum,
  amount: amount
});

window.location.href = `confirmation.html?${params.toString()}`;
