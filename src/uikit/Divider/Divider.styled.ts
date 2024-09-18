import styled from 'styled-components';

import { TPickers } from '@/types/styled.types';
import { IDividerProps } from '@/uikit/Divider/Divider.types';
import { toPx } from '@/utils/formatting.utils';

const Picks: TPickers<IDividerProps> = {
	width: ({ $width }) => (typeof $width === 'string' ? $width : toPx($width || 0)),
	color: ({ color }) => color!,
};

const __Divider = styled.div<IDividerProps>`
	height: 1px;
	width: ${Picks.width};
	background-color: ${Picks.color};
`;

export default __Divider;
