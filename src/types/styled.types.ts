import { IWithTheme } from '@/constants/colors.constants';

export type TStyledPropsPicker<T = unknown> = (props: T & IWithTheme) => string;
