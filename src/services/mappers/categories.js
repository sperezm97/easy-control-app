export default {
  toFirestore: cat => ({
    id: 0,
    name: cat.name,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return data;
  },
};
