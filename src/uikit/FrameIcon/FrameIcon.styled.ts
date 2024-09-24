import styled from 'styled-components';

import { EveryWithDollarSign } from '@/types/styled.types';
import { IFrameIconProps } from '@/uikit/FrameIcon/FrameIcon.types';
import { toDeg, toPx } from '@/utils/formatting.utils';

type __Props = EveryWithDollarSign<Omit<IFrameIconProps, 'icon'>>;

const __Frame = styled.div<__Props>`
	display: inline-block;
	position: relative;
	overflow: hidden;
	transition: 0.25s all;

	${({ $width }) => {
		if (!$width) return '';
		return `width: ${toPx($width)};`;
	}}

	${({ $height }) => {
		if (!$height) return '';
		return `height: ${toPx($height)};`;
	}}

  ${({ $rotate }) => {
		if (!$rotate) return '';
		return `transform: rotate(${toDeg($rotate)}deg);`;
	}}

	svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		transition: inherit;
	}
`;

export const FrameIconParts = {
	__Frame,
};
