import { HTMLAttributes } from 'react';

export interface IDotProps {
	color?: string;
}

export interface IDotComponentProps extends IDotProps, Omit<HTMLAttributes<HTMLDivElement>, 'color'> {}
