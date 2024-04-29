import React, { FC, MouseEvent } from 'react';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  imgSrc?: string;
  altText?: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, className, imgSrc, altText }) => {
  return (
    <div className={`flex item-center gap-2 cursor-pointer font-medium px-3 py-2.5 rounded-lg border-2 border-[#000] shadow-button ${className}`}>
      {imgSrc && altText && <Image src={imgSrc} alt={altText} width={23} height={23} />}
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
