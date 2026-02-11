import { Theme } from '~/config/theme';
import useTheme from '~/hooks/useTheme';
import normalize from '~/utils/normalize';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import { IMRoutes } from '~/config/routes';
import React, { memo, useMemo } from 'react';
import { IMImagePath } from '~/config/images';
import { BottomTabNavigationParamList } from '~/types/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen } from '~/screens/home';
import { AddItemScreen } from '~/screens/addItem';
import { InsightScreens } from '~/screens/insights';
import { Components } from '~/components';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator<BottomTabNavigationParamList>();

type SetBarIconType = {
  title: string;
  focused: boolean;
  icon: ImageSourcePropType | undefined;
};

const BottomTabNavigation = () => {
  const { t } = useTranslation();
  const theme = useTheme<Theme>();
  const { bottom } = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const setBarIcon = ({ focused, icon, title }: SetBarIconType) => {
    return <Components.IMTabIcon icon={icon} focused={focused} title={title} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'none',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: StyleSheet.flatten([
          styles.container,
          { height: bottom + normalize(58) },
        ]),
      }}
    >
      <Tab.Screen
        name={IMRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            setBarIcon({
              focused: focused,
              icon: focused
                ? IMImagePath.icons.ic_home_fill
                : IMImagePath.icons.ic_home,
              title: t('HOME'),
            }),
        }}
      />
      <Tab.Screen
        name={IMRoutes.AddItem}
        component={AddItemScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            setBarIcon({
              focused: focused,
              icon: focused
                ? IMImagePath.icons.ic_add_fill
                : IMImagePath.icons.ic_add,
              title: t('ADD_ITEM'),
            }),
        }}
      />
      <Tab.Screen
        name={IMRoutes.Insights}
        component={InsightScreens}
        options={{
          tabBarIcon: ({ focused }) =>
            setBarIcon({
              focused: focused,
              icon: focused
                ? IMImagePath.icons.ic_insights_fill
                : IMImagePath.icons.ic_insights,
              title: t('INSIGHTS'),
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default memo(BottomTabNavigation);

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      borderTopWidth: 1,
      paddingTop: normalize(14),
      backgroundColor: theme.colors.background,
    },
  });
};
