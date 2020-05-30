import { db } from '../config/firebase';

const ref = db.collection('accounts_type');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),
  fetchAll: () => ref.get(),

  // utilities
};
