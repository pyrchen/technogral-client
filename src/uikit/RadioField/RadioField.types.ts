import { InputHTMLAttributes } from 'react';

export interface IRadioFieldProps {
	label: string;
}

export interface IRadioFieldComponentProps extends IRadioFieldProps, InputHTMLAttributes<HTMLInputElement> {}
