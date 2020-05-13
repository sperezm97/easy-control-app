import { db } from '../config/firebase';

const ref = db.collection('accounts_type');

const accountsTypeConvert = {
  toFirestore: acc => ({
    id: 0,
    name: acc.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),
  fetchAll: () => ref.withConverter(accountsTypeConvert).get(),

  // utilities
};
