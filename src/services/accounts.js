import { db } from '../config/firebase';
import mapper from './mappers/accounts';

const ref = db.collection('accounts');

export default {
  // Using for fetch query's
  fetchAll: userId => ref.where('user_id', '==', userId).get(),
  create: body => ref.add(mapper.toFirestore(body)),
};
