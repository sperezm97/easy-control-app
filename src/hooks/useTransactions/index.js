import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from './reducer';

const TransactionStateContext = createContext();
const TransactionDispatchContext = createContext();

function TransactionProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (__DEV__) {
    console.log('Transaction Context loaded');
  }

  return (
    <TransactionStateContext.Provider value={state}>
      <TransactionDispatchContext.Provider value={dispatch}>
        {props.children}
      </TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  );
}

function useTransactionState() {
  return useContext(TransactionStateContext);
}

function useTransactionDispatch() {
  return useContext(TransactionDispatchContext);
}

function useTransactions() {
  return [useTransactionState(), useTransactionDispatch()];
}

export { TransactionProvider, useTransactionState, useTransactionDispatch };

export default useTransactions;
