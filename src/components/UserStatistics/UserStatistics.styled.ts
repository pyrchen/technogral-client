import { Property } from 'csstype';
import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';

const __Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-auto-rows: auto;
	column-gap: 50px;
	row-gap: 22px;
`;

const __StatBlock = styled.div`
	display: flex;
	align-items: center;
	gap: 13px;
`;

const __StatText = styled.span`
	font-size: 18px;
	font-weight: ${TextWeights.MEDIUM};
	color: #0a0a0a;
`;

const __IconWrapper = styled.div<{ $fill?: string; $rotate: Property.Rotate }>`
	position: relative;
	width: 22px;
	height: 22px;
	${({ $rotate }) => ($rotate ? `transform: rotate(${$rotate});` : '')}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		inset: 0;

		path {
			${({ $fill }) => ($fill ? `fill: ${$fill} !important;` : '')}
		}
	}
`;

export const UserStatisticsParts = {
	__Wrapper,
	__StatBlock,
	__StatText,
	__IconWrapper,
};
