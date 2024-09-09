import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAvatarProps {
	width: number;
	url: string;
}

export interface IAvatarComponentProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		IAvatarProps {}
