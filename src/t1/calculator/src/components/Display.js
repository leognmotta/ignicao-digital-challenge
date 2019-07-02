import React from 'react';

import './Display.css';

export default function Display({ value }) {
  return (
    <tbody className="display">
      <tr>
        <td className="calc-area">{value}</td>
      </tr>
    </tbody>
  );
}
