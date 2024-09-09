'use client';

import { FC } from 'react';

import __Button from './Button.styled';
import { IButtonProps } from './Button.types';

const Button: FC<IButtonProps> = ({ children, size = 'medium', ...props }) => {
	return (
		<__Button
			size={size}
			{...props}
		>
			{children}
		</__Button>
	);
};

export default Button;
