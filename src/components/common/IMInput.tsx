import { useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface IMInputProps extends TextInputProps {
  label: string;
  errorText?: string;
  isPassword?: boolean;
}

export const IMInput = (props: IMInputProps) => {
  const [secureText, setSecureText] = useState<boolean>(
    props.isPassword ?? false,
  );

  const tooglePassowrd = () => {
    setSecureText(prev => !prev);
  };

  return (
    <View>
      <TextInput />
    </View>
  );
};
