function changeColor(){
  let button = document.getElementById("btn");
  let color = button.style.color;
  if (color == "blue") {
     button.style.color = 'red';
  } else {
     button.style.color = 'blue';
  }

}
