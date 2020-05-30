import moment from 'moment';
import accounting from 'accounting-js';
import { types } from '../config/firebase';

export const formatObject = doc => ({
  id: doc.id,
  ...doc.data(),
});

export const formatDataFromFb = docs => {
  const formatData = [];
  docs.forEach(doc => formatData.push(formatObject(doc)));
  return formatData;
};

export const formatPrice = value => accounting.formatMoney(value, '$', 2, ',', '.');

export const unFormatMoney = value => accounting.unformat(value);

export const convertDate = object => moment(object).format('ll');

export const fbDateTime = () => types.Timestamp.now();

export const isOnlyNumbers = value => /^\d+$/.test(value);

export const convertFromProxy = state => JSON.parse(JSON.stringify(state));
