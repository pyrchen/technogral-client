import { combineReducers } from 'redux';

import { authReducer } from '@/store/auth/auth.slice';
import { toastsReducer } from '@/store/toasts/toasts.slice';

export const rootReducer = combineReducers({
	auth: authReducer,
	toasts: toastsReducer,
});
