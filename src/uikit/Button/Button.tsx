'use client';

import { FC } from 'react';

import { ButtonVariants } from '@/uikit/Button/Button.styled';

import { IButtonComponentsProps } from './Button.types';

const Button: FC<IButtonComponentsProps> = ({
	children,
	variant = 'outlined',
	size = 'medium',
	fullWidth = false,
	leftAddon = null,
	rightAddon = null,
	...props
}) => {
	const __Button = ButtonVariants[variant];

	return (
		<__Button
			$size={size}
			$fullWidth={fullWidth}
			{...props}
		>
			{leftAddon}
			{children}
			{rightAddon}
		</__Button>
	);
};

export default Button;
