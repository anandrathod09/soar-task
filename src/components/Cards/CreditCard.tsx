import React from 'react';
import ChipDark from '../../images/icon/icon_chip_card_dark.svg';
import ChipLight from '../../images/icon/icon_chip_card_light.svg';
import CardTypeDark from '../../images/icon/credit-card-type-dark.svg';
import CardTypeLight from '../../images/icon/credit-card-type-light.svg';

interface CreditCardItemProps {
  theme?: 'dark' | 'light';
  balanceAmount?: string;
  ChipImageSrc?: string;
  holderName?: string;
  validDate?: string;
  cardNumber?: string;
}

const formatBalanceAmount = (amount: string | number): string => {
  if (typeof amount === 'string') {
    amount = parseFloat(amount);
  }
  return isNaN(amount) ? 'N/A' : new Intl.NumberFormat('en-US').format(amount);
};

const maskCardNumber = (cardNumber?: string): string => {
  if (!cardNumber) return '**** **** **** ****';
  return cardNumber.replace(/^(\d{4})\d*(\d{4})$/, '$1 **** **** $2');
};

const CreditCard: React.FC<CreditCardItemProps> = ({
  theme = 'light',
  balanceAmount = 'N/A',
  holderName = 'Full Name',
  validDate = 'MM/YY',
  cardNumber,
}) => {
  const isDarkTheme = theme === 'dark';

  return (
    <div
      className={`flex min-h-[170px] min-w-[265px] flex-col justify-between overflow-hidden rounded-xl sm:h-[205px] sm:w-[305px] ${
        isDarkTheme
          ? 'bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white'
          : 'border border-solid border-stroke bg-white text-[#343C6A]'
      }`}
    >
      <div className="sm:mb[33px] mb-[15px] flex justify-between px-[20px] pt-[17px] sm:pl-[26px] sm:pr-6 sm:pt-6">
        <div>
          <p
            className={`text-card-1.1 font-light sm:text-card-1 ${
              isDarkTheme ? '' : 'text-gray-500'
            }`}
            aria-label={`Balance amount: ${formatBalanceAmount(balanceAmount)}`}
          >
            Balance
          </p>
          <p className="text-card-0.1 font-medium sm:text-card-0">
            {'$' + formatBalanceAmount(balanceAmount)}
          </p>
        </div>
        <img
          className="h-[29px] w-[29px] object-contain sm:h-[35px] sm:w-[35px]"
          src={isDarkTheme ? ChipLight : ChipDark}
          alt="Chip Icon"
        />
      </div>

      <div className="sm:mb[35px] mb-[16px] px-[20px] sm:pl-[26px] sm:pr-6">
        <div className="flex gap-[57px] sm:gap-[67px]">
          <div className="flex flex-col gap-[2px] sm:gap-[4px]">
            <p
              className={`text-card-1.1 font-light sm:text-card-1 ${
                isDarkTheme ? '' : 'text-gray-500'
              }`}
              aria-label={`Card holder: ${holderName}`}
            >
              CARD HOLDER
            </p>
            <p className="text-card-2.1 font-medium sm:text-card-2">
              {holderName}
            </p>
          </div>

          <div className="flex flex-col gap-[2px] sm:gap-[4px]">
            <p
              className={`text-card-1.1 font-light sm:text-card-1 ${
                isDarkTheme ? '' : 'text-gray-500'
              }`}
              aria-label={`Valid thru: ${validDate}`}
            >
              VALID THRU
            </p>
            <p className="text-card-2.1 font-medium sm:text-card-2">
              {validDate}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex h-[51px] items-center justify-between px-[20px] sm:h-[70px] sm:pl-[26px] sm:pr-6 ${
          isDarkTheme
            ? 'bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white'
            : 'border-t border-solid border-stroke bg-white text-[#343C6A]'
        }`}
        style={
          isDarkTheme
            ? {
                background:
                  'linear-gradient(to right, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05) 100%)',
                boxShadow:
                  'inset 0px 2px 4px rgba(255, 255, 255, 0.1), inset 0px -2px 4px rgba(0, 0, 0, 0.2)',
              }
            : {}
        }
      >
        <p
          className="text-card-2 font-medium sm:text-card-3"
          aria-label={`Card number: ${maskCardNumber(cardNumber)}`}
        >
          {maskCardNumber(cardNumber)}
        </p>
        <img
          className="h-[18px] w-[27px] object-contain sm:h-[30px] sm:w-[44px]"
          src={isDarkTheme ? CardTypeDark : CardTypeLight}
          alt="Card type icon"
        />
      </div>
    </div>
  );
};

export default CreditCard;
