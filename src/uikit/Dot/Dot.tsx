import { FC } from 'react';

import { DotParts } from '@/uikit/Dot/Dot.styled';
import { IDotComponentProps } from '@/uikit/Dot/Dot.types';

const Dot: FC<IDotComponentProps> = ({ color = '#0066FF', ...props }) => {
	return (
		<DotParts.__Dot
			$color={color}
			{...props}
		/>
	);
};

export default Dot;
