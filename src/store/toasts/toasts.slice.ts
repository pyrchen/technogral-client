import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { IAddToastPayload, IToast, IToastsInitialData } from '@/store/toasts/toasts.types';

const initialState: IToastsInitialData = {
	toasts: [],
};

const defaultToastConfig: Pick<IToast, 'duration'> = {
	duration: 5000,
};

const decorateDefaultToast = (toast: IAddToastPayload): IToast => ({
	...defaultToastConfig,
	...toast,
	id: v4(),
});

const name = 'toasts';

const slice = createSlice({
	name,
	initialState,
	reducers: {
		addToast: (state, action: PayloadAction<IAddToastPayload>) => {
			state.toasts.push(decorateDefaultToast(action.payload));
		},
		removeToast: (state, action: PayloadAction<string>) => {
			state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
		},
	},
});

export const toastsReducer = slice.reducer;

export const toastsActions = slice.actions;
