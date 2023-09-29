function openPageTwo() {
  window.location.href = '../doc/add-bank.html';
}

function updatePageOne() {
  const bankName = document.getElementById('bankNameInput').value;
  const lastDigits = document.getElementById('accNumberInput').value;

  const bankNameElement = window.opener.document.querySelector('.bank-name p');
  const lastDigitsElement = window.opener.document.querySelector('.acc-number p:last-child');

  bankNameElement.innerText = bankName;
  lastDigitsElement.innerText = lastDigits;
  
  window.close();
}