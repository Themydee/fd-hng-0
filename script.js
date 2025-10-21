const timeElement = document.getElementById("userTime");
function updateTime() {
  timeElement.textContent = Date.now();
}
setInterval(updateTime, 1000);
updateTime();

const avatarUpload = document.getElementById("avatarUpload");
const avatarImage = document.getElementById("avatarImage");

avatarUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImage.src = imageURL;
  }
});


const form = document.getElementById("contactForm");
  const fields = ["name", "email", "subject", "message"];
  const feedback = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    fields.forEach(field => {
      document.getElementById(`error-${field}`).textContent = "";
    });

    fields.forEach(field => {
      const value = form[field].value.trim();
      const errorElement = document.getElementById(`error-${field}`);

      if (!value) {
        errorElement.textContent = "This field is required.";
        isValid = false;
      } else if (field === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        errorElement.textContent = "Please enter a valid email address.";
        isValid = false;
      } else if (field === "message" && value.length < 10) {
        errorElement.textContent = "Message must be at least 10 characters.";
        isValid = false;
      }
    });

    if (isValid) {
      feedback.textContent = "Message sent successfully!";
      feedback.setAttribute("data-testid", "test-contact-success");
      feedback.style.color = "green";
      form.reset();
    } else {
      feedback.textContent = "";
    }
  });