import flatpickr from 'flatpickr';
import { useEffect } from 'react';
import LabelText from '../LabelText';
import TextInputOne from '../InputField/TextInputOne';

interface DatePickerTwoProps {
  type: string;
  id: string;
  labelText?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  dataClass?: string;
  onChange?: (value: string) => void;
}

const DatePicker: React.FC<DatePickerTwoProps> = ({
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
  useEffect(() => {
    flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
      onChange: (_selectedDates: Date[], dateStr: string) => {
        if (onChange) {
          onChange(dateStr);
        }
      },
    });
  }, [onChange]);

  return (
    <>
      {labelText && <LabelText labelText={labelText} inputId={id} />}
      <div className="relative">
        <TextInputOne
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          dataClass={dataClass}
          className={className}
          onChange={onChange}
          aria-label={labelText || 'Date Picker'}
          aria-haspopup="dialog"
        />
        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
              fill="#64748B"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
