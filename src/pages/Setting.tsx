import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import CardLayoutDefault from '../components/Cards/CardLayoutDefault';
import TextInputOne from '../components/Forms/InputField/TextInputOne';
import ButtonOne from '../components/Forms/Buttons/ButtonOne';
import DefaultUserImage from '../images/user/user-001.png';
import EditImageIcon from '../images/icon/icon-edit-bg.svg';
import DatePicker from '../components/Forms/DatePicker/DatePicker';

const Setting: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  const [profileImage, setProfileImage] = useState<string | null>(
    DefaultUserImage
  );
  const [formData, setFormData] = useState({
    yourname: '',
    username: '',
    email: '',
    password: '',
    dateofbirth: '',
    presentaddress: '',
    permanentaddress: '',
    city: '',
    postalcode: '',
    country: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Load data from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Validation function
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.yourname.trim()) newErrors.yourname = 'Name is required.';
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (!formData.dateofbirth.trim()) {
      newErrors.dateofbirth = 'Date of Birth is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('profileImage', profileImage || '');
      alert('Form data saved successfully!');
    }
  };

  // Handle input field changes
  const handleInputChange = (value: string, name: string) => {
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    setErrors({ ...errors, [name]: '' });
  };

  const handleDateChange = (value: string) => {
    const updatedData = { ...formData, dateofbirth: value };
    setFormData(updatedData);
    setErrors({ ...errors, dateofbirth: '' });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const activeClasses = 'text-primary border-primary';
  const inactiveClasses = 'border-transparent';
  const hoverClasses = 'hover:text-primary';

  return (
    <DefaultLayout>
      <CardLayoutDefault>
        <div className="mb-6 flex flex-wrap gap-5 border-b border-stroke sm:gap-10">
          <Link
            to="#"
            className={`border-b-2 py-4 text-sm font-medium md:text-base ${hoverClasses} ${
              openTab === 1 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(1)}
          >
            Edit Profile
          </Link>
          <Link
            to="#"
            className={`border-b-2 py-4 text-sm font-medium md:text-base ${hoverClasses} ${
              openTab === 2 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(2)}
          >
            Preferences
          </Link>
          <Link
            to="#"
            className={`border-b-2 py-4 text-sm font-medium md:text-base ${hoverClasses} ${
              openTab === 3 ? activeClasses : inactiveClasses
            }`}
            onClick={() => setOpenTab(3)}
          >
            Security
          </Link>
        </div>

        <div>
          <div
            className={`leading-relaxed ${openTab === 1 ? 'block' : 'hidden'}`}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-[40px] sm:flex-row sm:items-start sm:gap-[65px]"
            >
              <div className="w-[90px]">
                <label className="relative flex cursor-pointer">
                  <img
                    src={profileImage || DefaultUserImage}
                    alt="user"
                    className="rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-[30px]">
                    <img src={EditImageIcon} alt="edit" />
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <div className="w-full sm:flex-1">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Your Name *', name: 'yourname' },
                    { label: 'User Name *', name: 'username' },
                    { label: 'Email *', name: 'email', type: 'email' },
                    { label: 'Password *', name: 'password', type: 'password' },
                    {
                      label: 'Date of Birth *',
                      name: 'dateofbirth',
                      isDatePicker: true,
                    },
                    { label: 'Present Address', name: 'presentaddress' },
                    { label: 'Permanent Address', name: 'permanentaddress' },
                    { label: 'City', name: 'city' },
                    { label: 'Postal Code', name: 'postalcode' },
                    { label: 'Country', name: 'country' },
                  ].map(({ label, name, type = 'text', isDatePicker }) => (
                    <div className="w-full" key={name}>
                      {isDatePicker ? (
                        <DatePicker
                          labelText={label}
                          type="text"
                          placeholder="mm/dd/yyyy"
                          name={name}
                          id={name}
                          className={`form-datepicker ${errors[name] ? 'border-meta-1' : ''}`}
                          defaultValue={formData[name]}
                          onChange={handleDateChange}
                        />
                      ) : (
                        <TextInputOne
                          labelText={label}
                          type={type}
                          name={name}
                          id={name}
                          placeholder={`Enter ${label}`}
                          defaultValue={formData[name]}
                          onChange={handleInputChange}
                          className={`${errors[name] ? 'border-meta-1' : ''}`}
                        />
                      )}
                      {errors[name] && (
                        <p className="text-red text-sm font-semibold py-1 px-2">{errors[name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex w-full justify-end sm:mt-10">
                  <ButtonOne
                    className="flex h-10 w-full rounded-xl sm:h-[50px] sm:w-[190px]"
                    label="Save"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className={`leading-relaxed ${openTab === 2 ? 'block' : 'hidden'}`}
          >
            Preferences Data
          </div>
          <div
            className={`leading-relaxed ${openTab === 3 ? 'block' : 'hidden'}`}
          >
            Security Data
          </div>
        </div>
      </CardLayoutDefault>
    </DefaultLayout>
  );
};

export default Setting;
