function updateTime() {
  const userTime = document.getElementById("userTime");
  userTime.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
