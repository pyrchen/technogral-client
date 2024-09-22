import { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFrameIconProps {
	icon?: ComponentType;
	width?: number;
	height?: number;
	rotate?: number;
}

export interface IFrameIconComponentProps
	extends IFrameIconProps,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
