import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	$width?: string | number;
	color?: string;
}
