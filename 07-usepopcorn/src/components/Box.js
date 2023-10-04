/** @format */

import { useState } from "react";

export default function Box({elemenet}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && elemenet}
    </div>
  );
}
