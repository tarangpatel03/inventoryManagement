import { useMemo } from 'react';
import { Theme } from '~/config/theme';
import useTheme from '~/hooks/useTheme';
import normalize from '~/utils/normalize';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { Components } from '~/components';
import { width } from '~/config/constants';

type Props = {
  title: string;
  focused: boolean;
  icon: ImageSourcePropType | undefined;
};

export const IMTabIcon = (props: Props) => {
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Image
        source={props.icon}
        style={StyleSheet.flatten([
          styles.icon,
          props.focused && styles.focusIcon,
        ])}
      />
      <Components.IMText
        style={StyleSheet.flatten([
          styles.text,
          props.focused && styles.focusText,
        ])}
      >
        {props.title}
      </Components.IMText>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      gap: normalize(4),
      width: width / 3,
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: normalize(2),
    },
    icon: {
      width: normalize(24),
      height: normalize(24),
      tintColor: theme.colors.buttonText,
    },
    focusIcon: {
      tintColor: theme.colors.primary,
    },
    focusText: {
      color: theme.colors.primary,
    },
    text: {
      fontWeight: '500',
      fontSize: normalize(12),
      color: theme.colors.buttonText,
    },
  });
