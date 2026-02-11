import {
  Text,
  StyleProp,
  TextProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface BATextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const IMText = ({ children, style, ...otherProps }: BATextProps) => {
  return (
    <Text style={StyleSheet.flatten([style])} {...otherProps}>
      {children}
    </Text>
  );
};
