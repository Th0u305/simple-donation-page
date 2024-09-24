

const donationDescriptions = {
  feni: 'Donate for Education in Feni, Bangladesh',
  noakhali: 'Donate for Flood at Noakhali, Bangladesh',
  quota: 'Donate for Health at Quota, Bangladesh',
  tree: 'Donate for tree in Bangladesh'
};


// buttons
const historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')


// container
const donationContainer = document.getElementById('donation-container')
const historyContainer = document.getElementById('history-container')


// Get input value from a field
function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value) ;
}


// Get inner text value from an element
function getInnerTextValue(id) {
  return parseFloat(document.getElementById(id).innerText) ;
}


// Set inner text value of an element
function setElementValue(id, value) {
  document.getElementById(id).innerText = value;
}


// button click events
document.getElementById('noakhali-btn').addEventListener('click', function() {
    processDonation('noakhali', 'noakhali-Input-Amount', 'noakhali-balance');
    document.getElementById('noakhali-Input-Amount').value = ""
});
document.getElementById('quota-btn').addEventListener('click', function() {
    processDonation('quota', 'quota-Input-Amount', 'quota-balance');
    document.getElementById('quota-Input-Amount').value = ""
});
document.getElementById('feni-btn').addEventListener('click', function() {
    processDonation('feni', 'feni-Input-Amount', 'feni-balance');
    document.getElementById('feni-Input-Amount').value = ""
});
document.getElementById('tree-btn').addEventListener('click', function() {
    processDonation('tree', 'tree-Input-Amount', 'tree-balance');
    document.getElementById('tree-Input-Amount').value = ""
});



