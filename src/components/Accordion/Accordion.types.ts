import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IAccordionProps {
	question: string;
	answer: string;
}

export interface IAccordionComponentProps
	extends IAccordionProps,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
