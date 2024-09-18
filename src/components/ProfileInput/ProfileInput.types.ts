import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProfileInputProps {
	title?: string;
	width?: string | number;
	inputTextColor?: string;
	border?: string;
	padding?: string;
}

export interface IProfileInputComponentProps
	extends IProfileInputProps,
		Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}
