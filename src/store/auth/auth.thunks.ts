import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/services/Auth.service';
import { authPrefixer } from '@/store/auth/auth.constants';
import { IAuthLoginRequest, IAuthSignUpRequest } from '@/types/auth.api.types';

const authService = AuthService.instance;

const login = createAsyncThunk(authPrefixer('login'), async (credentials: IAuthLoginRequest) => {
	return await authService.login(credentials);
});

const signup = createAsyncThunk(authPrefixer('register'), async (credentials: IAuthSignUpRequest) => {
	return await authService.signup(credentials);
});

const logout = createAsyncThunk(authPrefixer('logout'), async () => {
	return await authService.logout();
});

export const AuthThunks = {
	login,
	signup,
	logout,
};
