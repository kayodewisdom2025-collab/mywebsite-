// Simple example: Alert when page loads
window.onload = function() {
    console.log("Website is loaded!");
};

// Example: button click function
function sayHello() {
    alert("Hello! You clicked the button.");
}
// Interactive Service Boxes
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    alert(`You clicked on service #${index + 1}: ${box.querySelector('h3').innerText}`);
    box.style.backgroundColor = '#ffd700'; // highlight in gold when clicked
    setTimeout(() => {
      box.style.backgroundColor = '#fff'; // revert after 0.5 seconds
    }, 500);
  });
});
