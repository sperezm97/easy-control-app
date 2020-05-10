import { db } from '../config/firebase';

const ref = db.collection('categories');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),

  // utilities
  transactionConvert: {
    toFirestore: cat => ({
      id: 0,
      name: cat.name,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
