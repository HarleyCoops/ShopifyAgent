document.getElementById("run-audit").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // TODO: send message or fetch backend for audit
  document.getElementById("results").textContent = "Audit results here";
});