import { FC } from 'react';

import { AvatarParts } from '@/uikit/Avatar/Avatar.styled';
import { IAvatarComponentProps } from '@/uikit/Avatar/Avatar.types';

const Avatar: FC<IAvatarComponentProps> = ({ width = 0, url = '', ...props }) => {
	return (
		<AvatarParts.__AvatarWrapper
			$width={width}
			{...props}
		>
			<AvatarParts.__AvatarImage src={url} />
		</AvatarParts.__AvatarWrapper>
	);
};

export default Avatar;
