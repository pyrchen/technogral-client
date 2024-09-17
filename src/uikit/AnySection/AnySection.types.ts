import { HTMLAttributes } from 'react';

export interface IAnySectionProps {
	margin?: string;
	padding?: string;
}

export interface IAnySectionComponentProps extends IAnySectionProps, HTMLAttributes<HTMLDivElement> {}
