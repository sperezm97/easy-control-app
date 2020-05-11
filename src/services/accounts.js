import { db } from '../config/firebase';

const ref = db.collection('accounts');

const accountConvert = {
  toFirestore: acc => ({
    name: acc.name,
    totalAmount: acc.total_amount,
    accountTypeId: acc.type_account_id,
    userId: acc.user_id,
    income: +acc.total_amount_income,
    expenses: +acc.total_amount_expenses,
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
  update: (id, body) => ref.doc(id).withConverter(accountConvert).update(body),
  delete: id => ref.delete(id),
};
