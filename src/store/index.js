import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { createNetworkMiddleware } from 'react-native-offline';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    networkMiddleware,
    sagaMiddleware,
  ],
  // eslint-disable-next-line no-undef
  devTools: __DEV__,
  enhancers: [],
});

sagaMiddleware.run(sagas);
const persistor = persistStore(store);

export { store, persistor };
