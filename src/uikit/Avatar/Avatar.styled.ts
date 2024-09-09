import styled from 'styled-components';

import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { IAvatarProps } from '@/uikit/Avatar/Avatar.types';
import { toPx } from '@/utils/formatting.utils';

type __Props = EveryWithDollarSign<Omit<IAvatarProps, 'url'>>;

const Picks: TPickers<__Props> = {
	width: ({ $width }) => toPx($width),
};

const __AvatarWrapper = styled.div<__Props>`
	position: relative;
	width: ${Picks.width};
	height: ${Picks.width};
	border-radius: 50%;
	overflow: hidden;
`;

const __AvatarImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const AvatarParts = {
	__AvatarWrapper,
	__AvatarImage,
};
