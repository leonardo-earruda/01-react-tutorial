import React from "react";
import { useState } from "react";

export const Content = () => {
  let array = [
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ];
  const [items, setItems] = useState(array);

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item">
            <input type="checkbox" checked={item.checked}></input>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
