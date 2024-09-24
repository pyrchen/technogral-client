import { FC } from 'react';

import { __IconButtonParts } from '@/uikit/IconButton/IconButton.styled';

import { IIconButtonProps } from './IconButton.types';

const IconButton: FC<IIconButtonProps> = ({ children }) => {
	return <__IconButtonParts.__IconButton>{children}</__IconButtonParts.__IconButton>;
};

export default IconButton;
