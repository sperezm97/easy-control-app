import { fbDateTime } from '../../utils';

export default {
  toFirestore: trans => ({
    category_id: trans.categoryId,
    transaction_type_id: trans.transactionTypeId,
    description: trans.description,
    price: +trans.price,
    created_at: trans.createdAt || fbDateTime(),
    updated_at: trans.updatedAt || fbDateTime(),
    user_id: trans.userId,
    account_id: trans.accountId,
  }),
  // fromFirestore: data => ({
  //   categoryId: data.category_id,
  //   transactionTypeId: data.transaction_type_id,
  //   description: data.description,
  //   price: data.price,
  //   createdAt: data.created_at,
  //   updatedAt: data.updated_at,
  //   userId: data.user_id,
  //   accountId: data.account_id,
  // }),
  fromFirestore: snapshot => {
    if (!Array.isArray(snapshot)) {
      return {
        id: snapshot.id,
        categoryId: snapshot.category_id,
        transactionTypeId: snapshot.transaction_type_id,
        description: snapshot.description,
        price: snapshot.price,
        createdAt: snapshot.created_at,
        updatedAt: snapshot.updated_at,
        userId: snapshot.user_id,
        accountId: snapshot.account_id,
      };
    }
    return snapshot.map(data => ({
      id: data.id,
      categoryId: data.category_id,
      transactionTypeId: data.transaction_type_id,
      description: data.description,
      price: data.price,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      userId: data.user_id,
      accountId: data.account_id,
    }));
  },
};
