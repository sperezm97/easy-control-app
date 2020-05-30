export default {
  toFirestore: user => ({
    social_auth_id: user.socialAuthId,
    device_id: user.deviceId,
    first_name: user.firstName,
    last_name: +user.lastName,
    profile_photo: user.profilePhoto,
    email: user.email,
    active_account_id: user.activeAccountId,
  }),
  // fromFirestore: (snapshot, options) => {
  //   const data = snapshot.data(options);
  //   return {
  //     socialAuthId: data.social_auth_id,
  //     deviceId: data.device_id,
  //     firstName: data.first_name,
  //     lastName: data.last_name,
  //     profilePhoto: data.profile_photo,
  //     email: data.email,
  //     activeAccountId: data.active_account_id,
  //   };
  // },
  fromFirestore: snapshot => {
    if (snapshot instanceof Object) {
      return {
        id: snapshot.id,
        socialAuthId: snapshot.social_auth_id,
        deviceId: snapshot.device_id,
        firstName: snapshot.first_name,
        lastName: snapshot.last_name,
        profilePhoto: snapshot.profile_photo,
        email: snapshot.email,
        activeAccountId: snapshot.active_account_id,
      };
    }
    return snapshot.map(data => ({
      id: data.id,
      socialAuthId: data.social_auth_id,
      deviceId: data.device_id,
      firstName: data.first_name,
      lastName: data.last_name,
      profilePhoto: data.profile_photo,
      email: data.email,
      activeAccountId: data.active_account_id,
    }));
  },
};
