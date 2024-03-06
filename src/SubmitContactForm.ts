function SubmitContactForm(name: string, message: string, email: string) {
  fetch("https://formsubmit.co/ajax/7c70fa377d56551bbc667c80a997c428", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      message: message,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export default SubmitContactForm;
