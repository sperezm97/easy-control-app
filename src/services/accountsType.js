import { db } from '../config/firebase';

const ref = db.collection('accounts_type');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),

  // utilities
  transactionConvert: {
    toFirestore: acc => ({
      id: 0,
      name: acc.name,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
