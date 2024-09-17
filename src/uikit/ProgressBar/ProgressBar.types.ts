import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProgressBarProps
	extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
	$width?: string | number;
	color?: string;
	progress?: number;
	title?: string;
}
