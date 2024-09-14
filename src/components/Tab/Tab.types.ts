import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ITabProps {
	tabName: string;
	active: boolean;
	onClick?: (tabId: number) => void;
}

export interface ITabComponentProps
	extends ITabProps,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
