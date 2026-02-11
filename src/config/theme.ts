import { IMColors } from '~/config/colors';
import createTheme from '~/utils/createTheme';

export enum ThemeModeOptions {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export type ThemeMode =
  | ThemeModeOptions.Light
  | ThemeModeOptions.Dark
  | ThemeModeOptions.System;

export const LightTheme = createTheme({
  colors: {
    primary: IMColors.APP_2A71ED,
    background: IMColors.APP_FFFFFF,
    primaryText: IMColors.APP_292D32,
    secondaryText: IMColors.APP_767C8C,
    buttonText: IMColors.APP_89909D,
  },
});

export const DarkTheme = createTheme({
  ...LightTheme,
  colors: {
    background: IMColors.BLACK,
    primaryText: IMColors.APP_FFFFFF,
  },
});

export type Theme = typeof LightTheme;
