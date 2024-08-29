import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export type TButtonSize = 'small' | 'medium' | 'large';

type TButtonWithChildren = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

export interface IButtonProps extends TButtonWithChildren {
	size?: TButtonSize;
}
