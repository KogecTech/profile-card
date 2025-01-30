// Function to update and display the current time in UTC
function updateTime() {
    const currentTime = new Date().toISOString();
    document.getElementById('time').innerText = `Current Time (UTC): ${currentTime}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial time display
  updateTime();
  