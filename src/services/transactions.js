import firebase from 'firebase';
import { db } from '../config/firebase';

const ref = db.collection('transactions');

const transactionConvert = {
  toFirestore: trans => ({
    category_id: trans.categoryId,
    transaction_type_id: trans.transactionTypeId,
    description: trans.description,
    price: +trans.price,
    created_at: trans.createdAt || firebase.firestore.Timestamp.now(),
    updated_at: trans.updatedAt || firebase.firestore.Timestamp.now(),
    user_id: trans.userId,
    account_id: trans.accountId,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return {
      categoryId: data.category_id,
      transactionTypeId: data.transaction_type_id,
      description: data.description,
      price: data.price,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      userId: data.user_id,
      accountId: data.account_id,
    };
  },
};

const getOptions = {
  // db.enableNetwork()
  source: 'cache',
};

export default {
  ref,
  fetchAll: (userId, accountId) =>
    ref
      .where('user_id', '==', userId)
      .where('account_id', '==', accountId)
      .orderBy('created_at', 'desc')
      .withConverter(transactionConvert)
      .get(),

  fetchSingle: id => ref.doc(id).withConverter(transactionConvert).get(),
  create: body => ref.withConverter(transactionConvert).add(body),

  refreshTransactions: (userId, accountId) =>
    ref
      .orderBy('created_at', 'desc')
      .limit(10)
      .where('user_id', '==', userId)
      .where('account_id', '==', accountId)
      .withConverter(transactionConvert),
};
