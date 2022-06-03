
// I use the MouseUp event to check which div is active
// so i can transfer it through local Storage to the other Javascript file

function onMouseUp(e) {
  const activeTextarea = document.activeElement;

  value = activeTextarea.innerHTML;
  localStorage.setItem("ratingvalue", value);  
}

const ratings = document.querySelectorAll(".rating");

for(rating of ratings){
    rating.addEventListener('mouseup', onMouseUp, false);
}