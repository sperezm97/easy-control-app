import { db } from '../config/firebase';

const ref = db.collection('transaction_type');

const transactionTypeConvert = {
  toFirestore: trans => ({
    id: 0,
    name: trans.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};

export default {
  // Using for fetch query's
  fetchAll: () => ref.withConverter(transactionTypeConvert).get(),

  // utilities
};
