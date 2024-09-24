
// amount 
function validateDonation(inputAmount, myBalance) {
    if (inputAmount < 1 || isNaN(inputAmount)) {
      alert('Invalid Donation Amount!');
      return false;
    } else if (myBalance < inputAmount) {
      alert("You Don't Have Enough Balance!");
      return false;
    }
    return true;
  }
  
  
// balance and history
function processDonation(location, inputAmountId, balanceId) {
    const inputAmount = getInputFieldValueById(inputAmountId);
    const myBalance = getInnerTextValue('my-balance');
    const locationBalance = getInnerTextValue(balanceId);

    if (validateDonation(inputAmount, myBalance)) {
      setElementValue(balanceId, locationBalance + inputAmount);
      setElementValue('my-balance', myBalance - inputAmount);
      addToHistory(inputAmount, location, donationDescriptions[location]);
      my_modal.showModal(); 
    }
}


// sending the my balance after donation to blog.html

blogBtn.addEventListener('click', function(){
  const blogBalance = getInnerTextValue('my-balance');
  
  localStorage.setItem('my-balance', blogBalance)
  
  window.location.href = "blog.html"

})


function addToHistory(amount, location) {
    const div = document.createElement('div');
    const dateTime = new Date().toString();

    div.classList.add('flex', 'flex-col', 'gap-4', 'md:p-8', 'p-4', 'border-2', 'border-gray-300', 'rounded-xl');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">${amount} Taka donated to: ${donationDescriptions[location]}</h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date: ${dateTime}</p>`;

    const historyContainer = document.getElementById('history-container');
    historyContainer.insertBefore(div, historyContainer.firstChild);
}
  
  
  
  // update and history button
historyBtn.addEventListener('click',function(){
    historyContainer.classList.remove('hidden')
    donationContainer.classList.add('hidden')
      
    historyBtn.classList.add('bg-green')
    historyBtn.classList.remove('bg-white')
  
    donationBtn.classList.add('bg-white')
})
  
donationBtn.addEventListener('click',function(){
   
    historyContainer.classList.add('hidden')
    donationContainer.classList.remove('hidden')
    
    donationBtn.classList.add('bg-primary')
    donationBtn.classList.remove('bg-white')
    
    historyBtn.classList.add('bg-white')
})