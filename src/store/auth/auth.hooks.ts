import { createSelector } from 'reselect';

import { ReduxBuilder } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import { AuthThunks } from '@/store/auth/auth.thunks';
import { createActionsHook } from '@/utils/redux.utils';

export const useAuthSelector = ReduxBuilder.createSliceSelectorHook('auth');

const isAuthenticatedSelector = createSelector([(state: RootState['auth']) => state.token], (token) => !!token);
export const useIsAuthenticated = () => useAuthSelector(isAuthenticatedSelector);

export const useAuthThunks = createActionsHook(AuthThunks);
