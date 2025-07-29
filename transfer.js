document.getElementById('transferForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Basic validation (you can add more)
  const amount = document.getElementById('amount').value;
  if (parseFloat(amount) <= 0) {
    alert("Amount must be more than 0.");
    return;
  }

  // Show success
  document.getElementById('confirmation').classList.remove('hidden');

  // Clear form (optional)
  this.reset();
});
