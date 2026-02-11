import { useContext } from 'react';
import { BaseTheme } from '~/types/theme';
import { ThemeContext } from '~/components/common/context';

const useTheme = <Theme extends BaseTheme = BaseTheme>() =>
  useContext(ThemeContext) as Theme;

export default useTheme;
