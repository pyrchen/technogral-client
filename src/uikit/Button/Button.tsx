'use client';

import { FC } from 'react';

import { ButtonVariants } from '@/uikit/Button/Button.styled';

import { IButtonComponentsProps } from './Button.types';

const Button: FC<IButtonComponentsProps> = ({
	children,
	variant = 'outlined',
	size = 'medium',
	fullWidth = false,
	...props
}) => {
	const __Button = ButtonVariants[variant];

	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		<__Button
			$size={size}
			$fullWidth={fullWidth}
			{...props}
		>
			{children}
		</__Button>
	);
};

export default Button;
