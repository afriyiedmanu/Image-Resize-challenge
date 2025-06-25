const jason = document.getElementById('jason');
    let isEnlarged = false;
function toggleSizeAndBorder() {
  if (!isEnlarged) {
    jason.style.width = '1000px';
    jason.style.height = '800px';
    jason.style.border = '10px solid red';
    jason.style.textAlign='center';
  } else {
    jason.style.width = '300px';  
    jason.style.height = '300px';        
    jason.style.border = '10px solid blue';
    jason.style.textAlign='center'          
  }
  isEnlarged = !isEnlarged;
}
jason.addEventListener('click', toggleSizeAndBorder);
