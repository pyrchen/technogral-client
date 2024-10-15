import { useAppDispatch } from '@/lib/hooks';
import { TAny } from '@/types/base';

export const createPrefixer =
	<T extends string>(prefix1: T) =>
	<V extends string>(prefix2: V) =>
		`${prefix1}/${prefix2}` as const;

export const createActionsHook =
	<T extends object>(thunks: T) =>
	() => {
		const dispatch = useAppDispatch();

		return Object.entries(thunks).reduce((acc: TAny, [fnName, fn]) => {
			acc[fnName] = async (...args: Parameters<typeof fn>) => await dispatch(fn(...args));
			return acc;
		}, {}) as typeof thunks;
	};
