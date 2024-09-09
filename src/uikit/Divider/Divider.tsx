import { FC } from 'react';

import __Divider from '@/uikit/Divider/Divider.styled';
import { IDividerProps } from '@/uikit/Divider/Divider.types';

const Divider: FC<IDividerProps> = ({ $width = '100%', color = '#C7C7C7', ...props }) => {
	return (
		<__Divider
			$width={$width}
			color={color}
			{...props}
		/>
	);
};

export default Divider;
