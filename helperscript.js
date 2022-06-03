// Extracting the value and targeting the div i want to edit 

var value = localStorage.getItem("ratingvalue");  

const select = document.getElementById('selected');

select.innerHTML = `You selected ${value} out of 5`