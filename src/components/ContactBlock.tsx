import React, { useState } from "react";
import SubmitContactForm from "../SubmitContactForm";
import FormInput from "./form/FormInput";
import "../assets/css/ContactBlock.css";

function ContactBlock() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function contactFormRequest() {
    DisableButton(true);
    SubmitContactForm(name, message, email);
  }

  function DisableButton(disabled: boolean) {
    const button = document.querySelector(".submit-button");
  }

  return (
    <>
      <div className={"row about-me-text-large"}>Lets Chat</div>
      <form
        target="_blank"
        action="https://formsubmit.co/7c70fa377d56551bbc667c80a997c428"
        method="POST"
      >
        <div className="body-row">
          <div className="column">
            <FormInput
              name={"email"}
              setEmail={setEmail}
              placeholder={"Email Address"}
            />
            <FormInput name={"name"} setEmail={setName} placeholder={"Name"} />
            <div className="row">
              <textarea
                placeholder="Your Message"
                className="message-text-area"
                name="message"
                rows={10}
                onInput={(e) => {
                  const element = e.currentTarget as HTMLTextAreaElement;
                  const value = element.value;
                  setMessage(value);
                }}
                required
              ></textarea>
            </div>
            <div className="row">
              <button
                type="button"
                onClick={() => contactFormRequest()}
                className="submit-button"
              >
                {loading ? "loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactBlock;
