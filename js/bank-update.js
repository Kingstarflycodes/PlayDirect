function openPageTwo() {
  window.location.href = '../doc/add-bank.html';
}

function updatePageOne() {
  const bankName = document.getElementById('bankNameInput').value;
  const accNumberInput = document.getElementById('accNumberInput').value;

  // Extract last four digits
  const lastFourDigits = accNumberInput.slice(-4);

  // Store the values in localStorage
  localStorage.setItem('bankName', bankName);
  localStorage.setItem('lastFourDigits', lastFourDigits);
  
  window.location.href = '../doc/confirm-details.html';
}

// Retrieve and update values from localStorage on page load
window.onload = function() {
  const storedBankName = localStorage.getItem('bankName');
  const storedLastFourDigits = localStorage.getItem('lastFourDigits');

  if (storedBankName && storedLastFourDigits) {
    const bankNameElement = document.querySelector('.bank-name p');
    const lastDigitsElement = document.getElementById('lastDigits');

    bankNameElement.innerText = storedBankName;
    lastDigitsElement.innerText = storedLastFourDigits;
  }

  // Clear the stored values from localStorage
  localStorage.removeItem('bankName');
  localStorage.removeItem('lastFourDigits');
};
