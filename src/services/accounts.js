import { db } from '../config/firebase';

const ref = db.collection('accounts');

const accountConvert = {
  toFirestore: acc => ({
    id: 0,
    name: acc.name,
    totalAmount: acc.total_amount,
    accountTypeId: acc.type_account_id,
    userId: acc.user_id,
    income: +acc.total_amount_income,
    expenses: +acc.total_amount_expenses,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};

export default {
  // Using for fetch query's
  ref,
  fetchAll: () => ref.orderBy('created_at', 'desc').withConverter(accountConvert).limit(10).get(),
  fetchSingle: id => ref.doc(id).withConverter(accountConvert).get(),
  create: body => ref.withConverter(accountConvert).add(body),
  update: (id, body) => ref.doc(id).withConverter(accountConvert).update(body),
  delete: id => ref.delete(id),
};
