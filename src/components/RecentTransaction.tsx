import React from 'react';

interface TranscationSatement {
  image: string;
  title: string;
  date: string;
  returnRate: number;
}

interface RecentTransactionProps {
  transcationSatement: TranscationSatement[];
}

const RecentTransaction: React.FC<RecentTransactionProps> = ({ transcationSatement }) => {
  return (
    <div className="col-span-12 rounded-xl bg-white px-5.5 py-5.5">
      <div className="flex flex-col gap-5 overflow-auto">
        {transcationSatement.map((item, key) => (
          <div
            key={key}
            className="flex items-center justify-between rounded-[5px]"
            role="listitem"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <img
                  src={item.image}
                  alt={`${item.title} logo`}  // Descriptive alt text for the image
                  aria-label="Transaction Logo"
                />
              </div>

              <div>
                <h5 className="text-sm font-bold leading-6 text-primary">{item.title}</h5>
                <p className="text-xs font-medium text-secondary">{item.date}</p>
              </div>
            </div>

            <div className="text-right">
              <p
                className={`flex items-center justify-end gap-1 text-xs font-medium ${item.returnRate >= 0 ? 'text-green' : 'text-red'}`}
                aria-live="polite"  // For updating the return rate dynamically for screen readers
                aria-label={`Return rate is ${item.returnRate >= 0 ? '+' : ''}${item.returnRate}`}
              >
                {item.returnRate >= 0 ? `+$${item.returnRate}` : `-$${Math.abs(item.returnRate)}`}
                {item.returnRate >= 0 ? (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"  // No need for screen readers to announce the icon
                  >
                    <path
                      d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"  // No need for screen readers to announce the icon
                  >
                    <path
                      d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z"
                      fill=""
                    />
                  </svg>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransaction;
