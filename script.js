const copyToClipboard = async () => {
    try {
      const element = document.querySelector(".user-select-all");
      await navigator.clipboard.writeText(element.textContent);
      // Optional: Provide feedback or perform additional actions upon successful copy
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Optional: Handle and display the error to the user
    }
  };