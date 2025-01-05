import React from 'react';
import LabelText from '../LabelText';

interface InputProps {
  type: string;
  id: string;
  labelText?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  dataClass?: string;
  onChange?: (value: string, name: string) => void;
}

const TextInputOne: React.FC<InputProps> = ({
  type,
  id,
  labelText = '',
  name = '',
  placeholder = '',
  defaultValue = '',
  className = '',
  dataClass = '',
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onChange) {
      onChange(value, name);
    }
  };

  return (
    <>
      {labelText && <LabelText labelText={labelText} inputId={id} />}
      <input
        className={`border-stroke w-full rounded-xl border border-[#DFEAF2] px-4.5 py-3 text-secondary focus:border-blue focus-visible:outline-none ${className}`}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        data-class={dataClass}
        onChange={handleInputChange}
        aria-label={labelText || placeholder || name || 'Input field'}
      />
    </>
  );
};

export default TextInputOne;
