export const initialState = {
  list: [],
  single: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'transactions/setData':
      return { ...state, ...payload };

    case 'transactions/setUpdate':
      return { ...state, ...payload };

    case 'transactions/setRemove':
      return { ...state, ...payload };

    case 'transactions/clearState':
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const setTransactions = payload => ({
  type: 'transactions/setData',
  payload,
});

export const setSingleTransactions = payload => ({
  type: 'transactions/setData',
  payload,
});

export const updateTransaction = payload => ({
  type: 'transactions/setUpdate',
  payload,
});

export const removeTransactionSet = payload => ({
  type: 'transactions/setData',
  payload,
});

export const clearTransactions = payload => ({
  type: 'transactions/setData',
  payload,
});
