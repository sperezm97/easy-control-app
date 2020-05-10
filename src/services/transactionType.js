import { db } from '../config/firebase';

const ref = db.collection('transaction_type');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),

  // utilities
  transactionConvert: {
    toFirestore: trans => ({
      id: 0,
      name: trans.name,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
