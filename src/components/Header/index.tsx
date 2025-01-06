import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import DropdownSetting from './DropdownSetting';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Overview';
      case '/transactions':
        return 'Transactions';
      case '/accounts':
        return 'Accounts';
      case '/investments':
        return 'Investments';
      case '/credit-cards':
        return 'Credit Cards';
      case '/loans':
        return 'Loans';
      case '/services':
        return 'Services';
      case '/my-privileges':
        return 'My Privileges';
      case '/setting':
        return 'Setting';
      default:
        return 'Soar';
    }
  };

  useEffect(() => {
    document.title = getPageTitle();
  }, [location]);

  return (
    <header className="sticky top-0 z-999 mb-10 flex w-full bg-white sm:mb-0 sm:border-b sm:border-stroke">
      <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
        {/* Hamburger menu for toggling the sidebar */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            aria-label="Toggle sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Dynamic page title */}
        <h1 className="text-title-1 font-semibold text-primary sm:text-title">
          {getPageTitle()}
        </h1>

        {/* Search bar and dropdown menus */}
        <div className="items-stretch flex gap-3 2xsm:gap-7">
          <div className="absolute left-0 right-0 top-full flex px-[25px] sm:relative sm:px-0 bg-white">
            <form className="flex-1" action="">
              <div className="relative">
                <button
                  aria-label="Search"
                  className="absolute left-[25px] top-1/2 ml-[-10px] -translate-y-1/2"
                >
                  <svg
                    className="fill-body hover:fill-secondary"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill=""
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  aria-label="Search input"
                  placeholder="Type to search..."
                  className="h-[40px] w-full rounded-full bg-gray py-3 pl-[50px] pr-4 text-secondary focus:outline-none sm:h-[50px] sm:w-[255]"
                />
              </div>
            </form>
          </div>

          {/* Dropdown menus for settings, notifications, and user */}
          <ul className="items-stretch hidden gap-2 2xsm:gap-4 sm:flex">
            <DropdownSetting aria-label="Settings" />
            <DropdownNotification aria-label="Notifications" />
          </ul>
          <DropdownUser aria-label="User menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
