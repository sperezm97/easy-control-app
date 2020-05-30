import { db } from '../config/firebase';
import mapper from './mappers/users';

const ref = db.collection('users');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),
  create: body => ref.add(mapper.toFirestore(body)),
  update: (id, body) => ref.doc(id).update(body),
};
