import React, { useState } from "react";
import SubmitContactForm from "../SubmitContactForm";
import FormInput from "./form/FormInput";
import "../assets/css/ContactBlock.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import * as yup from "yup";

function ContactBlock() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

  const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const Button = () => {
    async function validateForm() {
      const dataObject = {
        name: name,
        email: email,
        message: message,
      };
      // validating this dataObject concerning Yup userSchema

      const isValid = await userSchema.isValid(dataObject);

      if (isValid) {
        setState((state) => !state);
        SubmitContactForm(name, message, email);
        setErrors("");
      } else {
        setErrors("Please fill out every section");
      }
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
            onClick={() => validateForm()}
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
            <div className={"error-message"}>{errors}</div>
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
