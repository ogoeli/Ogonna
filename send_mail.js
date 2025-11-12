// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return; // Prevent errors if the form isn't on the page

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent successfully.");
        form.reset();

        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          window.location.href = "index.html"; // Change to "/" if needed
        }, 2000);
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your connection.");
    }
  });
});
