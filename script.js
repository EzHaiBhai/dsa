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
  const copySEL = async () => {
    try {
      const element = document.querySelector(".sel");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyBUB = async () => {
    try {
      const element = document.querySelector(".bub");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyINS = async () => {
    try {
      const element = document.querySelector(".ins");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyLS = async () => {
    try {
      const element = document.querySelector(".ls");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };
  const copyBS = async () => {
    try {
      const element = document.querySelector(".bs");
      await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };