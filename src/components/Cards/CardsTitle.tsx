import React from 'react';
import { Link } from 'react-router-dom';

interface CardTitleProps {
  title: string;
  linkText?: string;
  linkTo?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title, linkText, linkTo }) => {
  return (
    <div className="flex justify-between items-center pb-5">
      <h2 className="font-bold text-black text-base lg:text-[22px]">
        {title}
      </h2>
      {linkText && linkTo && (
        <Link
          to={linkTo}
          className="font-medium text-primary hover:underline text-sm lg:text-[17px]"
          aria-label={linkText}
        >
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default CardTitle;