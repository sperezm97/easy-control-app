export const getTransactionType = state => state.options.transactionTypes;
export const getCategories = state => state.options.categories;
export const getAccountType = state => state.options.accountTypes;

export const isExpensesTransaction = state =>
  state.options.transactionTypes[0].id == 'ks25ee53mu6Ja4V6VKPl';
export const isIncomeTransaction = state =>
  state.options.transactionTypes[1].id == 'rXhNf8qWxQooVeaZJ1Tb';
