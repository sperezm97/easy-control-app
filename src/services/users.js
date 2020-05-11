import { db } from '../config/firebase';

const ref = db.collection('users');

const userConvert = {
  toFirestore: user => ({
    social_auth_id: user.socialAuthId,
    device_id: user.deviceId,
    first_name: user.firstName,
    last_name: +user.lastName,
    profile_photo: user.profilePhoto,
    email: user.email,
  }),
  fromFirestore: (snapshot, options) => {
    let data = snapshot.data(options);
    data = {
      socialAuthId: data.social_auth_id,
      deviceId: data.device_id,
      firstName: data.first_name,
      lastName: data.last_name,
      profilePhoto: data.profile_photo,
      email: data.email,
    };
    return data;
  },
};

export default {
  // Using for fetch query's
  fetchSingle: id => ref.doc(id).withConverter(userConvert).get(),
  create: body => ref.withConverter(userConvert).add(body),
  update: (id, body) => ref.doc(id).withConverter(userConvert).update(body),
};
