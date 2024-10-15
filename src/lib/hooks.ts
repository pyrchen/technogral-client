import { useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDispatch, AppStore, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const ReduxBuilder = {
	createSliceSelectorHook:
		<T extends keyof RootState>(slice: T) =>
		<V>(selector: (counter: RootState[T]) => V): V => {
			return useAppSelector((state) => selector(state[slice]));
		},
};
