import { db } from '../config/firebase';

const ref = db.collection('accounts');

const accountConvert = {
  toFirestore: acc => ({
    name: acc.name,
    total_amount: +acc.totalAmount,
    type_account_id: acc.typeAccountId,
    user_id: acc.userId,
    total_amount_income: +acc.totalIncome || 0,
    total_amount_expenses: +acc.totalExpenses || 0,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return {
      name: data.name,
      totalAmount: data.total_amount,
      totalExpenses: data.total_amount_expenses,
      totalIncome: data.total_amount_income,
      typeAccountId: data.type_account_id,
    };
  },
};

export default {
  // Using for fetch query's
  ref,
  fetchAll: userId =>
    ref.where('user_id', '==', userId).limit(10).withConverter(accountConvert).get(),
  fetchSingle: id => ref.doc(id).withConverter(accountConvert).get(),
  create: body => ref.withConverter(accountConvert).add(body),
};
