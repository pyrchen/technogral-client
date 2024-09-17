import styled from 'styled-components';

import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { IDotProps } from '@/uikit/Dot/Dot.types';

type TProps = EveryWithDollarSign<IDotProps>;

const Picks = {
	bgColor: ({ $color }) => $color!,
} satisfies TPickers<TProps>;

const __Dot = styled.div<TProps>`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: ${Picks.bgColor};
`;

export const DotParts = {
	__Dot,
};
