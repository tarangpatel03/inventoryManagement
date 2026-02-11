import '~/locales/i18n';
import { useMemo } from 'react';
import { StatusBar } from 'react-native';
import { Components } from '~/components';
import { loaderRef } from '~/utils/loader';
import Toast from 'react-native-toast-message';
import { Provider, useSelector } from 'react-redux';
import RootNavigation from '~/navigation/RootNavigation';
import { persistor, RootState, store } from '~/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DarkTheme, LightTheme, ThemeModeOptions } from '~/config/theme';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeApp />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const ThemeApp = () => {
  const currentThemeMode = useSelector(
    (state: RootState) => state.user.currentThemeMode,
  );

  const currentTheme = useMemo(() => {
    return currentThemeMode === ThemeModeOptions.Dark ? DarkTheme : LightTheme;
  }, [currentThemeMode]);

  return (
    <Components.ThemeProvider theme={currentTheme}>
      <RootNavigation />
      <Toast config={Components.IMBaseToast} />
      <Components.IMLoader ref={loaderRef} />
    </Components.ThemeProvider>
  );
};

export default App;
