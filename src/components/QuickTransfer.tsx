import React from 'react';
import CardLayoutDefault from './Cards/CardLayoutDefault';
import QuickTransferSwiper from './QuickTransferSwiper';
import QuickTransferForm from './QuickTransferForm';


const QuickTransfer: React.FC = () => {
  return (
    <CardLayoutDefault>
      <QuickTransferSwiper />
      <QuickTransferForm />
    </CardLayoutDefault>
  );
};

export default QuickTransfer;
