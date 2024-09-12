import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISettingCardProps {
	title: string;
	desc: string;
	icon: ReactNode;
}

export interface ISettingCardComponentProps
	extends ISettingCardProps,
		Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}
