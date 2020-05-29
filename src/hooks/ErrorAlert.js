import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import { getHasError, getErrorMessage } from '../store/common/selectors';
import { clearError } from '../store/common';

export default () => {
  const hasError = useSelector(getHasError);
  const errorMessage = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (hasError) {
      ref.alertWithType('erro', 'Error', errorMessage);
    }
    return () => {
      dispatch(clearError());
    };
  }, [hasError]);

  return <DropdownAlert ref={ref} showCancel titleNumOfLines={1} messageNumOfLines={2} />;
};
