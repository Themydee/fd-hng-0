// Update live time every second
const timeElement = document.getElementById("userTime");
function updateTime() {
  timeElement.textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();

// Handle avatar upload
const avatarUpload = document.getElementById("avatarUpload");
const avatarImage = document.getElementById("avatarImage");

avatarUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImage.src = imageURL;
  }
});
