import React from 'react';

import './Button.css';

export default function Button({ name, handleClick, primary, secondary, wide, high }) {
  const classes = [
    'button',
    primary ? 'primary-color' : '',
    secondary ? 'secondary-color' : '',
    wide ? 'wide' : ''
  ];

  return (
    <td className={classes.join(' ').trim()} onClick={() => handleClick(name)}>
      {name}
    </td>
  );
}
