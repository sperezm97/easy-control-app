export default {
  toFirestore: acc => ({
    id: 0,
    name: acc.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};
