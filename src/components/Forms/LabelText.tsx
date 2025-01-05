import React from 'react';

interface LabelProps {
  labelText?: string;
  inputId: string;
}

const LabelText: React.FC<LabelProps> = ({
  labelText = '',
  inputId,
}) => {
  return (
    <label
      className="mb-3 block text-sm font-medium text-primary"
      htmlFor={inputId}
    >
      {labelText}
    </label>
  );
};

export default LabelText;
