import { InputHTMLAttributes } from 'react';

export interface IRadioFieldProps {
	label: string;
	hint?: string;
}

export interface IRadioFieldComponentProps extends IRadioFieldProps, InputHTMLAttributes<HTMLInputElement> {}
