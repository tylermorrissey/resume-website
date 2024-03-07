import React, { useState } from "react";
import SubmitContactForm from "../SubmitContactForm";
import FormInput from "./form/FormInput";
import "../assets/css/ContactBlock.css";
import { ReactComponent as Loader } from "../assets/images/loading.svg";

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

  const Button = () => {
    return (
      <>
        <button
          type={"button"}
          onClick={() => contactFormRequest()}
          className={"submit-button"}
          disabled={loading}
        >
          {loading ? <Loader className={"spinner"} /> : "Submit"}
        </button>
      </>
    );
  };

  return (
    <>
      <div className={"row about-me-text-large"}>Lets Chat</div>
      <form
        target="_blank"
        action="https://formsubmit.co/7c70fa377d56551bbc667c80a997c428"
        method="POST"
      >
        <div className={"body-row"}>
          <div className={"form-column"}>
            <div className={"form-row"}>
              <FormInput
                name={"email"}
                setEmail={setEmail}
                placeholder={"Email Address"}
              />
              <FormInput
                name={"name"}
                setEmail={setName}
                placeholder={"Name"}
              />
            </div>
            <div className={"form-column"}>
              <div className={"form-row"}>
                <textarea
                  placeholder={"Your Message"}
                  className={"message-text-area"}
                  name={"message"}
                  rows={10}
                  onInput={(e) => {
                    const element = e.currentTarget as HTMLTextAreaElement;
                    const value = element.value;
                    setMessage(value);
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <div className={"form-row"}>
              <Button />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactBlock;
