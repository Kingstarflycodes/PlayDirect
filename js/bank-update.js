//confirm details page
function openPageTwo() {
  window.open('../doc/add-bank.html', '_blank');
}

//add bank page
function saveAndClose() {
  const lastDigits = document.getElementById('accNumberInput').value;
  const bankName = document.getElementById('bankNameInput').value;

  // Send the values back to Page One and close this window
  const openerWindow = window.opener;
  if (openerWindow) {
    const accNumberP = openerWindow.document.querySelector('.acc-number p:last-child');
    const bankNameP = openerWindow.document.querySelector('.bank-name p');
        
    if (accNumberP) {
      accNumberP.innerText = lastDigits;
    }
    if (bankNameP) {
      bankNameP.innerText = bankName;
    }
  }

  window.close();
}