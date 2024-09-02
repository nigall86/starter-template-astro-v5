import { useState } from 'react';

function TextInput({ name, label }) {
  const [inputName, setInputName] = useState(name);

  return (
    <>
      <form>
        <label htmlFor={inputName}>{label}</label>
        <input
          id={inputName}
          value={inputName}
          onChange={(event) => {
            setInputName(event.target.value);
          }}
        />
      </form>

      <p>
        <strong>Current value:</strong>
        {inputName || '(empty)'}
      </p>
    </>
  );
}

export default TextInput;
