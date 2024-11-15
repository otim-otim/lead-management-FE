import React, { createContext, useReducer, ReactNode } from 'react';
import { Lead } from '../types';

// Define action types
type Action =
  | { type: 'SET_LEADS'; payload: Lead[] }
  | { type: 'ADD_LEAD'; payload: Lead }
  | { type: 'REMOVE_LEAD'; payload: number }; 

// Define the state type
interface LeadsState {
  leads: Lead[];
}

// Reducer function
function leadsReducer(state: LeadsState, action: Action): LeadsState {
  switch (action.type) {
    case 'SET_LEADS':
      return { ...state, leads: action.payload };
    case 'ADD_LEAD':
      return { ...state, leads: [...state.leads, action.payload] };
    case 'REMOVE_LEAD':
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Initial state
const initialLeadsState: LeadsState = {
  leads: [],
};
