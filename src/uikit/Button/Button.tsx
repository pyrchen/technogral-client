'use client';

import { FC } from 'react';

import { ButtonVariants } from '@/uikit/Button/Button.styled';

import { IButtonComponentsProps } from './Button.types';

const Button: FC<IButtonComponentsProps> = ({ children, variant = 'outlined', size = 'medium', ...props }) => {
	const __Button = ButtonVariants[variant];

	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		<__Button
			$size={size}
			{...props}
		>
			{children}
		</__Button>
	);
};

export default Button;
