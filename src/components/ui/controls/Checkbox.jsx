import { useState } from 'react';
import { Checkmark } from '../../../icons/Checkmark.jsx';

function Checkbox({ name, label, optIn = false }) {
  const [option, setOption] = useState(optIn);

  return (
    <>
      <form className='checkbox-wrapper'>
        <input
          type='checkbox'
          id={name}
          checked={option}
          onChange={(event) => {
            setOption(event.target.checked);
          }}
        />
        <div className='fake-checkbox'>
          <Checkmark />
        </div>
        <label htmlFor={name}>{label}</label>
      </form>
    </>
  );
}

export default Checkbox;
