import { useState } from "react";

export const Input = ({ placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        // kai zmogus vest info i input, ta reiksme atsivaizduos:
        onChange={(event) => setValue(event.target.value)}
      />
      {/* patikriname, ar veikia input'as: */}
      <p>{value}</p>
    </>
  );
};
