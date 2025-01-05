import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import CreditCard from '../components/Cards/CreditCard';
import RecentTransaction from '../components/RecentTransaction';
import CardTitle from '../components/Cards/CardsTitle';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';
import QuickTransfer from '../components/QuickTransfer';

// Images icon for Recent Transaction
import MasterCard from '../images/brand/master-card.svg';
import PayPal from '../images/brand/pay-pal.svg';
import DollarSign from '../images/brand/dollar-sign.svg';

// Recent Transaction Data
const transcationSatement = [
  {
    image: MasterCard,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    returnRate: -850,
  },
  {
    image: PayPal,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    returnRate: +2500,
  },
  {
    image: DollarSign,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    returnRate: +5400,
  },
];

// Bar chart === weekly activity data
const barData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Deposit',
      data: [300, 400, 500, 300, 500, 400, 200],
      backgroundColor: '#0040FF',
      borderRadius: 15,
    },
    {
      label: 'Withdraw',
      data: [200, 300, 400, 500, 400, 200, 300],
      backgroundColor: '#000000',
      borderRadius: 15,
    },
  ],
};

// pie chart === Expenses statistics data
const pieData = {
  labels: ['Bill Expenses', 'Others', 'Investment', 'Entertainment'],
  datasets: [
    {
      data: [15, 35, 20, 30],
      backgroundColor: ['#FC7900', '#232323', '#396AFF', '#343C6A'],
      hoverOffset: 15,
    },
  ],
};

// line chart === Balance history data
const lineData = {
  chartData: [300, 500, 200, 600, 400, 800, 700],
  chartCategories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
};

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">

        {/* <!-- ===== Credit card section start ===== --> */}
        <div className="col-span-12 xl:col-span-8">
          <CardTitle
            title="My Cards"
            linkText="See All"
            linkTo="/credit-cards"
          />

          <div className="flex gap-[26px] overflow-x-auto">
            <CreditCard
              balanceAmount="5756"
              holderName="Eddy Cusuma"
              validDate="11/22"
              cardNumber="3788378812341234"
              theme="dark"
            />

            <CreditCard
              balanceAmount="5756"
              holderName="Eddy Cusuma"
              validDate="11/22"
              cardNumber="3788378812341234"
            />
          </div>
        </div>
        {/* <!-- ===== Credit card section end ===== --> */}

        {/* <!-- ===== Recent Transaction section start ===== --> */}
        <div className="col-span-12 xl:col-span-4">
          <CardTitle title="Recent Transaction" />
          <RecentTransaction transcationSatement={transcationSatement} />
        </div>
        {/* <!-- ===== Recent Transaction section start ===== --> */}

        {/* <!-- ===== Weekly Activity section start ===== --> */}
        <div className="col-span-12 h-[365px] flex-1 xl:col-span-8">
          <CardTitle title="Weekly Activity" />
          <BarChart data={barData} />
        </div>
        {/* <!-- ===== Weekly Activity section start ===== --> */}

        {/* <!-- ===== Expense Statistics section start ===== --> */}
        <div className="col-span-12 h-[365px] flex-1 xl:col-span-4">
          <CardTitle title="Expense Statistics" />
          <PieChart data={pieData} />
        </div>
        {/* <!-- ===== Expense Statistics section start ===== --> */}

        {/* <!-- ===== Quick Transfer section start ===== --> */}
        <div className="col-span-12 xl:col-span-5">
          <CardTitle title="Quick Transfer" />
          <QuickTransfer />
        </div>
        {/* <!-- ===== Quick Transfer section start ===== --> */}

        {/* <!-- ===== Balance History section start ===== --> */}
        <div className="col-span-12 h-[350px] xl:col-span-7">
          <CardTitle title="Balance History" />
          <LineChart
            seriesData={lineData.chartData}
            categories={lineData.chartCategories}
          />
        </div>
        {/* <!-- ===== Balance History section start ===== --> */}
        
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
