/* Replace API_URL in Block 3 after we create API Gateway */
const API_URL = "https://m71558o6ci.execute-api.us-west-2.amazonaws.com/contact";


const form   = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "Sending…";

  const body = Object.fromEntries(new FormData(form));

  try {
    const r = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    status.textContent = r.ok
      ? "👍 Message sent! I’ll reply soon."
      : "😕 Error – please try again.";

    if (r.ok) form.reset();
  } catch {
    status.textContent = "😕 Network error.";
  }
});
