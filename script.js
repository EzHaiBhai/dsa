const copyToClipboard = async () => {
    try {
      const element = document.querySelector(".user-select-all");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  
  const copyLL = async () => {
    try {
      const element = document.querySelector(".linkedlist");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyStack = async () => {
    try {
      const element = document.querySelector(".stack");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copySq = async () => {
    try {
      const element = document.querySelector(".Sq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyCq = async () => {
    try {
      const element = document.querySelector(".Cq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyDq = async () => {
    try {
      const element = document.querySelector(".Dq");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };