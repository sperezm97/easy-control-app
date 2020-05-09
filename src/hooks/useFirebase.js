import { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import env from '../config/env';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const useFirebase = () => {
  const [fb, setFb] = useState(null);
  const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    databaseURL: env.databaseURL,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.messagingSenderId,
  };

  useEffect(() => {
    const instance = firebase.initializeApp(firebaseConfig);
    setFb(instance);
  }, []);

  return fb;
};

export default useFirebase;
