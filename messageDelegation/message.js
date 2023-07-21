// Function to handle the click event on the container
function handleContainerClick(event) {
    const removeBtn = event.target.closest(".removeBtn");
    if (removeBtn) {
      // Get the parent element (message) of the clicked remove button and remove it
      const message = removeBtn.parentElement;
      message.remove();
    }
  }
  
  // Add event listener to the container
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.addEventListener("click", handleContainerClick);
  