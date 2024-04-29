import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer font-medium px-6 py-2.5 rounded-lg border-2 border-[#000] shadow-button ${className}`}>
      {text}
    </button>
  );
}

export default Button;
