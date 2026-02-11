import React from 'react';
import { ErrorToast, SuccessToast } from 'react-native-toast-message';

export const IMBaseToast = {
  success: (props: any) => <SuccessToast {...props} text1NumberOfLines={0} />,
  error: (props: any) => <ErrorToast {...props} text1NumberOfLines={0} />,
};
