import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IRacingCardProps {
	title: string;
	desc: string;
	subdesc: string;
	price: string;
}

export interface ISettingCardComponentProps
	extends IRacingCardProps,
		Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {}
