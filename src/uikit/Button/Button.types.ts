import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

type TButtonWithChildren = PropsWithChildren<
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export interface IButtonProps extends TButtonWithChildren {
	size?: TButtonSize;
}
