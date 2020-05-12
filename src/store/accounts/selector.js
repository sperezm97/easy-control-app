export const getAllAccounts = state => state.accounts.data;
export const getActiveAccount = state => state.accounts.activeAccount;

export const getEmptyAccount = state => state.accounts.data.length == 0;
