'use client';

import { FC } from 'react';

import StyledButton from './Button.styled';
import { IButtonProps } from './Button.types';

const Button: FC<IButtonProps> = ({ children, size = 'medium', ...props }) => {
	return (
		<StyledButton
			size={size}
			{...props}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
