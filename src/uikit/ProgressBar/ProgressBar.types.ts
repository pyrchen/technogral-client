import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProgressBarProps {
	width?: string | number;
	color?: string;
	progress: number;
	title: string;
}
export interface IProgressBarContent
	extends IProgressBarProps,
		Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}
