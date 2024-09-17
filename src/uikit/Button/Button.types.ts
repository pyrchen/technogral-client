import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

export type TButtonVariants = 'filled' | 'outlined' | 'none';

export interface IButtonProps {
	size?: TButtonSize;
	variant?: TButtonVariants;
	fullWidth?: boolean;
	leftAddon?: ReactNode;
	rightAddon?: ReactNode;
}

export interface IButtonComponentsProps extends ButtonHTMLAttributes<HTMLButtonElement>, IButtonProps {}
