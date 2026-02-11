import { Theme } from '~/config/theme';
import { StyleSheet } from 'react-native';
import normalize from '~/utils/normalize';

export const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: normalize(10),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    buttonText: {
      color: theme.colors.primaryText,
    },
  });
};
