import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppNavigationParamList = {
  BottomTab: undefined;
};

export type BottomTabNavigationParamList = {
  Home: undefined;
  AddItem: undefined;
  Insights: undefined;
};

export type RootNavigationParamList = AppNavigationParamList &
  BottomTabNavigationParamList;

export type RootNavigationProp<T extends keyof RootNavigationParamList> =
  NativeStackScreenProps<RootNavigationParamList, T>;
