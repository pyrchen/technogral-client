import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

type TButtonWithChildren = PropsWithChildren<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export type TButtonVariants = 'filled' | 'outlined' | 'none';

export interface IButtonProps {
	size?: TButtonSize;
	variant?: TButtonVariants;
	fullWidth?: boolean;
}

export interface IButtonComponentsProps extends TButtonWithChildren, IButtonProps {}
