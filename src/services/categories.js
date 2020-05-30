import { db } from '../config/firebase';

const ref = db.collection('categories');

export default {
  // Using for fetch query's
  fetchAll: () => ref.get(),
};
