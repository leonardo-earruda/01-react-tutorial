import React from "react";
import { useState } from "react";

export const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const abaixaAi = () => {
    setCount(count - 1);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleClick}>Contador: {count}</button>
      <button onClick={abaixaAi}> - </button>
      <button onClick={handleNameChange}>Click it.</button>
      <button onClick={handleClick2}>Click it.</button>
      <button onClick={(e) => handleClick3(e)}>Click it.</button>
    </main>
  );
};

export default Content;
