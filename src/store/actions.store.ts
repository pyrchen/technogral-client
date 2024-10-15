import { RootState } from '@/lib/store';
import { authActions } from '@/store/auth';
import { toastsActions } from '@/store/toasts/toasts.slice';
import { TAny } from '@/types/base';
import { createActionsHook } from '@/utils/redux.utils';

const Actions = {
	auth: authActions,
	toasts: toastsActions,
} satisfies Record<keyof RootState, TAny>;

const AllActions = {
	...authActions,
};

export const useAllActions = () => AllActions;

export const useAuthActions = createActionsHook(Actions.auth);
export const useToastsActions = createActionsHook(Actions.toasts);
