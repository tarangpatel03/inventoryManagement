import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Theme } from '~/config/theme';
import useTheme from '~/hooks/useTheme';
import normalize from '~/utils/normalize';
import { Components } from '~/components';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const { width, height } = Dimensions.get('screen');

export type LoaderHandler = {
  show: (message?: string) => void;
  hide: () => void;
};

const IMAppLoader = forwardRef<LoaderHandler>((_, ref) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [text, setText] = useState<string>('');

  useImperativeHandle(ref, () => ({
    show: (message?: string) => {
      setText(message || t('LOADING'));
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
      setText('');
    },
  }));

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.loaderBox}>
        <ActivityIndicator size={'large'} />
        <Components.IMText style={styles.text}>{text}</Components.IMText>
      </View>
    </View>
  );
});

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      width,
      height,
      top: 0,
      left: 0,
      zIndex: 9999,
      alignItems: 'center',
      position: 'absolute',
      justifyContent: 'center',
      backgroundColor: theme.colors.primaryText + '80',
    },
    loaderBox: {
      elevation: 6,
      shadowRadius: 4,
      gap: normalize(10),
      shadowOpacity: 0.25,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: normalize(12),
      paddingVertical: normalize(15),
      paddingHorizontal: normalize(30),
      backgroundColor: theme.colors.background,
      shadowOffset: { width: 0, height: 2 },
    },
    text: {
      fontSize: 14,
      textAlign: 'center',
      color: theme.colors.primaryText,
    },
  });
};

export default IMAppLoader;
