export default {
  toFirestore: trans => ({
    id: 0,
    name: trans.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};
