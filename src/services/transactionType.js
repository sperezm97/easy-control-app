import { db } from '../config/firebase';

const ref = db.collection('transaction_type');

export default {
  // Using for fetch query's
  fetchAll: () => ref.get(),

  // utilities
};
