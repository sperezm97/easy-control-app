import { db } from '../config/firebase';
import mapper from './mappers/transaction';

const ref = db.collection('transactions');

export default {
  ref,
  fetchAll: (userId, accountId) =>
    ref
      .where('user_id', '==', userId)
      .where('account_id', '==', accountId)
      .orderBy('created_at', 'desc')
      .get(),

  fetchSingle: id => ref.doc(id).get(),
  create: body => ref.add(mapper.toFirestore(body)),

  refreshTransactions: (userId, accountId) =>
    ref
      .orderBy('created_at', 'desc')
      .limit(10)
      .where('user_id', '==', userId)
      .where('account_id', '==', accountId),
};
