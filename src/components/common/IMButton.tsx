import {
  StyleProp,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useMemo } from 'react';
import useTheme from '~/hooks/useTheme';
import { Components } from '~/components';
import normalize from '~/utils/normalize';
import { BaseTheme } from '~/types/theme';

interface IMButtonProps extends TouchableOpacityProps {
  buttonText: string;
  textStyle: StyleProp<TextStyle>;
}

export const IMButton = (props: IMButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container])}
      onPress={props.onPress}
    >
      <Components.IMText style={StyleSheet.flatten([props.textStyle])}>
        {props.buttonText}
      </Components.IMText>
    </TouchableOpacity>
  );
};

const createStyles = (theme: BaseTheme) => {
  return StyleSheet.create({
    container: {
      padding: normalize(10),
      borderRadius: normalize(8),
      backgroundColor: theme.colors.primaryText + '80',
    },
  });
};
