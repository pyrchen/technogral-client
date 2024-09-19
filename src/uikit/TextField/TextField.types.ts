import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface ITextFieldProps
	extends DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, HTMLInputElement> {
	initialValue?: string;
	size?: 'medium' | 'large';
	leftAddon?: ReactNode;
	rightAddon?: ReactNode;
	error?: string;
	fullWidth?: boolean;
}

export interface ITextFieldState {
	focused: boolean;
	invalid: boolean;
}
