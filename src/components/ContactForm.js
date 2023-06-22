import React from "react";
const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";

function ContactForm() {
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const form = event.target;
      const formData = new FormData(form);
      if (form.action !== SUBMIT_URL) {
        alert("Incorrect form action value");
        return;
      }

      if (form.method.toLowerCase() !== "post") {
        alert("Incorrect form method value");
        return;
      }

      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const text = await response.text();
      alert(text);
    } catch (_) {
      alert("Error submitting form!");
    }
  };
  return (
    <div>
      <form
        onSubmit={submitForm}
        action="https://www.greatfrontend.com/api/questions/contact-form"
        method="post"
      >
        <div>
          <label htmlFor="name-input">Name</label>
          <input id="name-input" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input id="email-input" name="email" type="email" />
        </div>
        <div>
          <label htmlFor="message-input">Message</label>
          <textarea id="message-input" name="message"></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
