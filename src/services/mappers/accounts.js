export default {
  toFirestore: acc => ({
    name: acc.name,
    total_amount: +acc.totalAmount,
    type_account_id: acc.typeAccountId,
    user_id: acc.userId,
    total_amount_income: +acc.totalIncome || 0,
    total_amount_expenses: +acc.totalExpenses || 0,
  }),
  //   fromFirestore: (snapshot, options) => {
  //     const data = snapshot.data(options);
  //     return {
  //       name: data.name,
  //       totalAmount: data.total_amount,
  //       totalExpenses: data.total_amount_expenses,
  //       totalIncome: data.total_amount_income,
  //       typeAccountId: data.type_account_id,
  //     };
  //   },
  fromFirestore: snapshot => {
    if (!Array.isArray(snapshot)) {
      return {
        id: snapshot.id,
        name: snapshot.name,
        totalAmount: snapshot.total_amount,
        totalExpenses: snapshot.total_amount_expenses,
        totalIncome: snapshot.total_amount_income,
        typeAccountId: snapshot.type_account_id,
      };
    }
    return snapshot.map(data => ({
      id: data.id,
      name: data.name,
      totalAmount: data.total_amount,
      totalExpenses: data.total_amount_expenses,
      totalIncome: data.total_amount_income,
      typeAccountId: data.type_account_id,
    }));
  },
};
