import { IWithTheme } from '@/constants/colors.constants';

export type TStyledPropsPicker<T> = (props: T & IWithTheme) => string;
