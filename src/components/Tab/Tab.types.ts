import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITabProps {
	tabName: string;
	active: boolean;
}

export interface ITabComponentProps
	extends ITabProps,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
