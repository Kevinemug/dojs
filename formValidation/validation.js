function compareValues() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const errorDisplay = document.getElementById("errorDisplay");
  
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
  
    if (isNaN(value1) || isNaN(value2) || value1 !== value2) {
      errorDisplay.textContent = value1 > value2 ? "First number is larger" : "Second number is larger";
    } else {
      errorDisplay.textContent = "";
    }
  }
  
  // Allow only numeric characters in the input fields
  document.getElementById("input1").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
  
  document.getElementById("input2").addEventListener("input", function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
  });
  