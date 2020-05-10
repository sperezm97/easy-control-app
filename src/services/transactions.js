import { db } from '../config/firebase';

const ref = db.collection('transactions');

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
    toFirestore: trans => ({
      id: 0,
      categoryId: trans.category_id,
      typeId: trans.transaction_type_id,
      description: trans.description,
      price: +trans.price,
      createdAt: trans.created_at,
      updatedAt: trans.updated_at,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
