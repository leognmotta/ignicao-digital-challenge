import React from 'react';

import './Display.css';

export default function Display({ value }) {
  let fixedValue;

  if (value.length > 12) fixedValue = value.substring(0, 12);

  return (
    <tbody className="display">
      <tr>
        <td className="calc-area">{fixedValue ? fixedValue : value}</td>
      </tr>
    </tbody>
  );
}
