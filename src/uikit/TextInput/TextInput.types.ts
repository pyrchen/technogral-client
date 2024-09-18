import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputProps
	extends DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, HTMLInputElement> {
	initialValue?: string;
	size?: 'medium' | 'large';
	leftAddon?: ReactNode;
	rightAddon?: ReactNode;
	hasError?: boolean;
	fullWidth?: boolean;
}

export interface ITextInputState {
	focused: boolean;
	touched: boolean;
	untouched: boolean;
	valid: boolean;
	invalid: boolean;
	pending: boolean;
	dirty: boolean;
}
