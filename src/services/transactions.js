import { db } from '../config/firebase';

const ref = db.collection('transactions');

const transactionConvert = {
  toFirestore: trans => ({
    category_id: trans.categoryId,
    transaction_type_id: trans.transactionTypeId,
    description: trans.description,
    price: +trans.price,
    createdAt: trans.created_at,
    updatedAt: trans.updated_at,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};

export default {
  // Using for fetch query's
  ref,

  fetchAll: () =>
    ref.orderBy('created_at', 'desc').limit(10).withConverter(transactionConvert).get(),
  fetchSingle: id => ref.doc(id).withConverter(transactionConvert).get(),
  create: body => ref.withConverter(transactionConvert).add(body),
  update: (id, body) => ref.doc(id).withConverter(transactionConvert).update(body),
  delete: id => ref.delete(id),
};