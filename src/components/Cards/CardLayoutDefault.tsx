import React, { ReactNode } from 'react';

interface CardLayoutDefaultProps {
  children: ReactNode;
  height?: string | number;
  className?: string;
  ariaLabel?: string;
}

const CardLayoutDefault: React.FC<CardLayoutDefaultProps> = ({
  children,
  height,
  className,
  ariaLabel,
}) => {
  return (
    <div
      className={`col-span-12 rounded-xl bg-white px-5.5 py-5.5 ${className}`}
      style={{ height: height || 'auto' }}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default CardLayoutDefault;
