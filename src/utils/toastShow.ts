import normalize from '~/utils/normalize';
import Toast from 'react-native-toast-message';

export const BASuccessToast = (message: string) => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'top',
    text1Style: {
      fontWeight: 400,
      fontSize: normalize(16),
    },
  });
};

export const BAErrorToast = (message: string) => {
  Toast.show({
    type: 'error',
    text1: message,
    position: 'top',
    text1Style: {
      fontWeight: 400,
      fontSize: normalize(16),
    },
  });
};
