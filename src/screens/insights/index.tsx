import { useMemo } from 'react';
import useTheme from '~/hooks/useTheme';
import { createStyles } from './styles';
import { Components } from '~/components';
import { useDispatch } from 'react-redux';
import { IMRoutes } from '~/config/routes';
import { useTranslation } from 'react-i18next';
import { setUser } from '~/store/features/userSlice';
import { RootNavigationProp } from '~/types/navigation';
import { Theme, ThemeModeOptions } from '~/config/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const InsightScreens = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RootNavigationProp<IMRoutes.Insights>) => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const dispatch = useDispatch();

  const switchToDarkMode = () => {
    dispatch(setUser({ currentThemeMode: ThemeModeOptions.Dark }));
  };
  const switchToLightMode = () => {
    dispatch(setUser({ currentThemeMode: ThemeModeOptions.Light }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.IMText style={styles.buttonText}>
        {t('HOME_SCREEN')}
      </Components.IMText>
      <Components.IMButton
        buttonText={'Light Mode'}
        textStyle={styles.buttonText}
        onPress={switchToLightMode}
      />
      <Components.IMButton
        buttonText={'Dark Mode'}
        textStyle={styles.buttonText}
        onPress={switchToDarkMode}
      />
    </SafeAreaView>
  );
};
