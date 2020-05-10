import moment from 'moment';
import accounting from 'accounting-js';

export const formatObject = doc => ({
  id: doc.id,
  ...doc.data(),
});

export const formatDataFromFb = docs => {
  const formatData = [];
  docs.forEach(doc => formatData.push(formatObject(doc)));
  return formatData;
};

export const formatMoneyValue = value => accounting.formatMoney(value, '$', 2, ',', '.');

export const unFormatMoney = value => accounting.unformat(value);

export const convertDate = object => {
  const fbDateTIme = object.toDate().toString();
  return moment(fbDateTIme).format('ll');
};
