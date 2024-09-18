import { HTMLAttributes } from 'react';

export interface ISelectFieldProps {
	options: {
		value: string;
		label: string;
	}[];
	placeholder?: string;
}

export interface ISelectFieldComponentProps extends ISelectFieldProps, HTMLAttributes<HTMLDivElement> {}
