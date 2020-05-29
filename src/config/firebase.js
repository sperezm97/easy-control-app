import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import func from '@react-native-firebase/functions';
import stg from '@react-native-firebase/storage';
import anl from '@react-native-firebase/analytics';

const db = firestore();
const types = firestore;

export { db, auth, func, stg, anl, types };
