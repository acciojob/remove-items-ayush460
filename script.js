//your JS code here. If required.
// get the select element
const selectElement = document.getElementById("colorSelect");

// get the button element
const buttonElement = document.querySelector("input[type='button']");

// add a click event listener to the button
buttonElement.addEventListener("click", () => {
  // get the selected option
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  // remove the selected option from the select element
  selectElement.removeChild(selectedOption);
});
