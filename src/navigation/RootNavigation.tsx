import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {
  AppNavigationParamList,
  RootNavigationParamList,
} from '~/types/navigation';
import React, { memo } from 'react';
import { IMRoutes } from '~/config/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import BottomtabNavigation from '~/navigation/BottomtabNavigation';

export const navigationRef =
  createNavigationContainerRef<RootNavigationParamList>();
const Stack = createNativeStackNavigator<AppNavigationParamList>();

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={IMRoutes.BottomTab}
          component={BottomtabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(RootNavigation);
