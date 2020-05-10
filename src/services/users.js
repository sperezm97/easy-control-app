import { db } from '../config/firebase';

const ref = db.collection('users');

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).get(),
  create: body => ref.add(body),
  update: (id, body) => ref.doc(id).update(body),

  // utilities
  transactionConvert: {
    toFirestore: user => ({
      id: 0,
      socialAuthId: user.social_auth_id,
      deviceId: user.device_id,
      firstName: user.first_name,
      lastName: +user.last_name,
      profilePhoto: user.profile_photo,
      email: user.email,
    }),
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return data;
    },
  },
};
