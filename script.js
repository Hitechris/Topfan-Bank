document.addEventListener("DOMContentLoaded", function () {
  const transactions = [
    { date: "2025-07-28", desc: "Amazon Purchase", amount: "-$120.49", status: "Completed" },
    { date: "2025-07-27", desc: "Salary Deposit", amount: "+$2,500.00", status: "Completed" },
    { date: "2025-07-25", desc: "Electricity Bill", amount: "-$95.30", status: "Pending" },
    { date: "2025-07-24", desc: "Starbucks", amount: "-$6.85", status: "Completed" }
  ];

  const list = document.getElementById("transaction-list");

  transactions.forEach(tx => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.desc}</td>
      <td>${tx.amount}</td>
      <td>${tx.status}</td>
    `;
    list.appendChild(row);
  });
});
