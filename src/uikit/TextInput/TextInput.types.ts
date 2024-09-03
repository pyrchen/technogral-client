import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface ITextInputProps
	extends DetailedHTMLProps<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, HTMLInputElement> {
	initialValue?: string;
	size?: 'medium' | 'large';
	leftAddon?: ReactNode;
	rightAddon?: ReactNode;
	hasError?: boolean;
}
