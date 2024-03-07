import React, { useState } from "react";
import SubmitContactForm from "../SubmitContactForm";
import FormInput from "./form/FormInput";
import "../assets/css/ContactBlock.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function ContactBlock() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const Button = () => {
    function contactFormRequest() {
      setState((state) => !state);
      SubmitContactForm(name, message, email);
    }

    const [state, setState] = useState(false);
    return (
      <SwitchTransition>
        <CSSTransition
          key={state ? "Submitted" : "Submit"}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="submit-button"
        >
          <button
            className={"submit-button"}
            onClick={() => contactFormRequest()}
            disabled={state}
            type={"button"}
          >
            {state ? "Submitted" : "Submit"}
          </button>
        </CSSTransition>
      </SwitchTransition>
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
