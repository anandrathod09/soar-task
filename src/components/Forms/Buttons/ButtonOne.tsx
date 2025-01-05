import React from 'react';

interface ButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  svg?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  style?: React.CSSProperties;
}

const ButtonOne: React.FC<ButtonProps> = ({
  className = '',
  label = '',
  onClick,
  svg,
  type = 'button',
  isDisabled = false,
  style = {},
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-[10px] rounded bg-primary px-4 py-2 text-white transition hover:bg-secondary ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
      aria-disabled={isDisabled}
      aria-label={label || 'button'}
    >
      {label && <span>{label}</span>}
      {svg && <span aria-hidden="true">{svg}</span>}
    </button>
  );
};

export default ButtonOne;
