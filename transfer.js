document.getElementById('transferForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Basic validation (you can add more)
  const amount = document.getElementById('amount').value;
  if (parseFloat(amount) <= 0) {
    alert("Amount must be more than 0.");
    return;
  }

  // Show success
  const confirmation = document.getElementById('confirmation');
  confirmation.classList.remove('hidden');
  confirmation.textContent = `✅ Transfer of $${parseFloat(amount).toFixed(2)} was successful!`;

  // Clear form (optional)
  this.reset();
});
