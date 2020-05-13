import { db } from '../config/firebase';

const ref = db.collection('categories');

const categoriesConvert = {
  toFirestore: cat => ({
    id: 0,
    name: cat.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};

export default {
  // Using for fetch query's
  fetchAll: () => ref.withConverter(categoriesConvert).get(),
};
