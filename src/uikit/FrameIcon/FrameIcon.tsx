import { createElement, FC, FunctionComponent } from 'react';

import { FrameIconParts } from '@/uikit/FrameIcon/FrameIcon.styled';
import { IFrameIconComponentProps } from '@/uikit/FrameIcon/FrameIcon.types';

const FrameIcon: FC<IFrameIconComponentProps> = ({ icon, children, height, width, rotate, ...props }) => {
	return (
		<FrameIconParts.__Frame
			$rotate={rotate}
			$width={width}
			$height={height}
			{...props}
		>
			{icon ? createElement(icon as FunctionComponent) : children}
		</FrameIconParts.__Frame>
	);
};

export default FrameIcon;
