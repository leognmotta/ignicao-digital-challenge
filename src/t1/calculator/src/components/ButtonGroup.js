import React from 'react';

import './ButtonGroup.css';

import Button from './Button';

export default function ButtonGroup({ handleClick }) {
  return (
    <tbody>
      <tr className="row">
        <Button name="C" handleClick={handleClick} wide secondary />
        <Button name="<" handleClick={handleClick} secondary />
        <Button name="/" handleClick={handleClick} secondary />
      </tr>

      <tr className="row">
        <Button name="7" handleClick={handleClick} />
        <Button name="8" handleClick={handleClick} />
        <Button name="9" handleClick={handleClick} />
        <Button name="*" handleClick={handleClick} secondary />
      </tr>

      <tr className="row">
        <Button name="4" handleClick={handleClick} />
        <Button name="5" handleClick={handleClick} />
        <Button name="6" handleClick={handleClick} />
        <Button name="-" handleClick={handleClick} secondary />
      </tr>

      <tr className="row">
        <Button name="1" handleClick={handleClick} />
        <Button name="2" handleClick={handleClick} />
        <Button name="3" handleClick={handleClick} />
        <Button name="+" handleClick={handleClick} secondary />
      </tr>

      <tr className="row">
        <Button name="0" handleClick={handleClick} wide />
        <Button name="," handleClick={handleClick} />
        <Button name="=" handleClick={handleClick} primary />
      </tr>
    </tbody>
  );
}
