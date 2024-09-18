import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ITab {
	title: string;
	path: string;
}

export interface ITabsProps {
	tabs: ITab[];
}

export interface ITabsComponentProps
	extends ITabsProps,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
