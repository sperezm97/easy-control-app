import { db } from '../config/firebase';

const ref = db.collection('accounts');

export default {
  // Using for fetch query's
  ref,

  fetchAll: () => ref.orderBy('created_at', 'desc').limit(10).get(),
  fetchSingle: id => ref.doc(id).get(),
  create: body => ref.add(body),
  update: (id, body) => ref.doc(id).update(body),
  delete: id => ref.delete(id),

  // utilities
  transactionConvert: {
    toFirestore: acc => ({
      id: 0,
      name: acc.name,
      totalAmount: acc.total_amount,
      accountTypeId: acc.type_account_id,
      userId: acc.user_id,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
