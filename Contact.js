const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const successBox = document.getElementById("successBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  clearErrors();

  // NAME
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Full name is required");
    valid = false;
  }

  // EMAIL
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    valid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, "Enter a valid email");
    valid = false;
  }

  // PHONE
  if (phoneInput.value.trim() === "") {
    showError(phoneInput, "Phone number is required");
    valid = false;
  } else if (phoneInput.value.trim().length < 10) {
    showError(phoneInput, "Enter a valid phone number");
    valid = false;
  }

  // MESSAGE
  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message cannot be empty");
    valid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters");
    valid = false;
  }

  // SUCCESS
  if (valid) {

    const btn = document.querySelector(".submit-btn");

    btn.innerHTML = `
      <i class="ri-loader-4-line spinner"></i>
      Sending...
    `;

    btn.disabled = true;

    setTimeout(() => {

      btn.innerHTML = `
        <span>Message Sent</span>
        <i class="ri-check-line"></i>
      `;

      btn.style.background = "#22c55e";

      successBox.style.display = "block";

      form.reset();

    }, 1800);
  }
});

// SHOW ERROR

function showError(input, message) {
  const inputGroup = input.parentElement;
  const error = inputGroup.querySelector(".error");

  error.innerText = message;

  input.style.borderColor = "#ff6b6b";
}

// CLEAR ERROR

function clearErrors() {
  const errors = document.querySelectorAll(".error");

  errors.forEach(error => {
    error.innerText = "";
  });

  const fields = document.querySelectorAll("input, textarea");

  fields.forEach(field => {
    field.style.borderColor = "rgba(255,255,255,0.08)";
  });
}

// EMAIL VALIDATION

function isValidEmail(email) {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}
async function loadContactSection() {

  const response = await fetch("./components/contact.html");

  const data = await response.text();

  document.getElementById("contact-section").innerHTML = data;

  initializeContactForm();
}

loadContactSection();


// CONTACT FORM VALIDATION

function initializeContactForm() {

  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Form Submitted Successfully!");

  });
}