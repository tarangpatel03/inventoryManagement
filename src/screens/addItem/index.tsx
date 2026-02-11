import { useMemo } from 'react';
import { generateRandomUID } from '~/utils/uuid';
import { Theme } from '~/config/theme';
import { createStyles } from './styles';
import useTheme from '~/hooks/useTheme';
import { Components } from '~/components';
import { IMRoutes } from '~/config/routes';
import { useTranslation } from 'react-i18next';
import { RootNavigationProp } from '~/types/navigation';
import { hideLoader, showLoader } from '~/utils/loader';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AddItemScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RootNavigationProp<IMRoutes.AddItem>) => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const generateRandom = () => {
    const uuid = generateRandomUID();
    console.log('UUID: ', uuid);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.IMText style={styles.buttonText}>
        {t('SECOND_SCREEN')}
      </Components.IMText>
      <Components.IMButton
        buttonText={'Show loader'}
        textStyle={styles.buttonText}
        onPress={() => {
          showLoader();
          setTimeout(() => hideLoader(), 2000);
        }}
      />
      <Components.IMButton
        buttonText={'Generate UUID'}
        textStyle={styles.buttonText}
        onPress={generateRandom}
      />
    </SafeAreaView>
  );
};
