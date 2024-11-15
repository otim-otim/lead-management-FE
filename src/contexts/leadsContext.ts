import { createContext, ReactNode, useReducer } from 'react';
import { leadsReducer, initialLeadsState } from '../reducers/leadsReducer';
import { Lead } from '../types';
interface LeadsProviderProps {
    children: ReactNode;
  }
  
  // Create context
  export const LeadsContext = createContext<{
    state: { leads: Lead[] };
    dispatch: React.Dispatch<Action>;
  } | null>(null);
  
  export const LeadsProvider: React.FC<LeadsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(leadsReducer, initialLeadsState);
  
    return (
      <LeadsContext.Provider value={{ state, dispatch }}>
        {children}
      </LeadsContext.Provider>
    );
  };
  