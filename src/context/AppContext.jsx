import { createContext, useContext, useState } from 'react';
import { FORFAITS_CLASSIC } from '../data';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [hasSubscription, setHasSubscription] = useState(
    () => localStorage.getItem('as-sub') === '1'
  );
  const [activeForfait, setActiveForfait] = useState(FORFAITS_CLASSIC[1]);

  const setSubAndPersist = (v) => {
    setHasSubscription(v);
    localStorage.setItem('as-sub', v ? '1' : '0');
  };

  return (
    <AppContext.Provider value={{ hasSubscription, setHasSubscription: setSubAndPersist, activeForfait, setActiveForfait }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
