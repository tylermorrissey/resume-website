import React, { Dispatch, SetStateAction } from "react";

function FormInput({
  name,
  placeholder,
  setEmail,
}: {
  name: string;
  placeholder: string;
  setEmail: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <div className="row">
        <input
          type={name}
          name={name}
          className={`${name}-input`}
          placeholder={placeholder}
          onInput={(e) => {
            const element = e.currentTarget as HTMLInputElement;
            const value = element.value;
            setEmail(value);
          }}
          required
        />
      </div>
    </>
  );
}

export default FormInput;
