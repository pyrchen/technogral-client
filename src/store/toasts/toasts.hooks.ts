import { ReduxBuilder } from '@/lib/hooks';
import { RootState } from '@/lib/store';

const toastsSelector = (state: RootState['toasts']) => state.toasts;

export const useToastsSelector = ReduxBuilder.createSliceSelectorHook('toasts');

export const useToasts = () => useToastsSelector(toastsSelector);
