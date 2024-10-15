import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthThunks } from '@/store/auth/auth.thunks';
import { IAuthInitialData } from '@/store/auth/auth.types';
import { TNullable } from '@/types/base';

const initialState: IAuthInitialData = {
	loading: false,
	error: null,
	token: localStorage.getItem('accessToken') || null,
	isAuthed: false,
};

const name = 'auth';

const slice = createSlice({
	name,
	initialState,
	reducers: {
		setAuthToken: (state, action: PayloadAction<TNullable<string>>) => {
			state.token = action.payload;
		},
		removeAuthToken: (state) => {
			state.token = '';
		},
	},
	selectors: {
		isAuth: (state) => !!state.token,
	},
	extraReducers: (builder) => {
		builder
			.addCase(AuthThunks.login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(AuthThunks.login.fulfilled, (state, action) => {
				const token = action.payload?.data?.accessToken || null;

				state.loading = false;

				if (token) {
					state.token = token;
					localStorage.setItem('accessToken', token);
				}
			})
			.addCase(AuthThunks.login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(AuthThunks.signup.rejected, (state, action) => {
				state.loading = false;
				state.error = null;
			})
			.addCase(AuthThunks.signup.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
			})
			.addCase(AuthThunks.signup.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(AuthThunks.logout.rejected, (state, action) => {
				state.loading = false;
				state.error = null;
			})
			.addCase(AuthThunks.logout.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.token = null;

				localStorage.removeItem('accessToken');
			})
			.addCase(AuthThunks.logout.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			});
	},
});

export const authReducer = slice.reducer;
export const authActions = slice.actions;
