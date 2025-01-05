import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investments from './pages/Investments';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Services from './pages/Services';
import MyPrivileges from './pages/MyPrivileges';
import Setting from './pages/Setting';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Overview" />
              <Dashboard />
            </>
          }
        />

        <Route
          path="transactions"
          element={
            <>
              <PageTitle title="Transactions" />
              <Transactions />
            </>
          }
        />

        <Route
          path="accounts"
          element={
            <>
              <PageTitle title="Accounts" />
              <Accounts />
            </>
          }
        />

        <Route
          path="investments"
          element={
            <>
              <PageTitle title="Investments" />
              <Investments />
            </>
          }
        />

        <Route
          path="credit-cards"
          element={
            <>
              <PageTitle title="Credit Cards" />
              <CreditCards />
            </>
          }
        />

        <Route
          path="loans"
          element={
            <>
              <PageTitle title="Loans" />
              <Loans />
            </>
          }
        />

        <Route
          path="Services"
          element={
            <>
              <PageTitle title="Services" />
              <Services />
            </>
          }
        />

        <Route
          path="my-privileges"
          element={
            <>
              <PageTitle title="My Privileges" />
              <MyPrivileges />
            </>
          }
        />

        <Route
          path="setting"
          element={
            <>
              <PageTitle title="Setting" />
              <Setting />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
