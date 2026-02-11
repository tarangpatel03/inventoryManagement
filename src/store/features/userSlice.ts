import { ThemeMode, ThemeModeOptions } from '~/config/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string;
  email: string;
  pushToken: string;
  currentThemeMode: ThemeMode;
  name: string | null;
  accessToken: string;
}

const initialState: UserState = {
  id: '',
  email: '',
  name: null,
  pushToken: '',
  accessToken: '',
  currentThemeMode: ThemeModeOptions.Light,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Partial<UserState>>) {
      return { ...state, ...action.payload };
    },

    clearUser() {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
