import { IWithTheme } from '@/constants/colors.constants';

export type TStyledPropsPicker<T = unknown> = (props: T & IWithTheme) => string;

export type TPickers<T = unknown> = Record<string, TStyledPropsPicker<T>>;

export type EveryWithDollarSign<T> = {
	[K in keyof T as `$${string & K}`]: T[K];
};
