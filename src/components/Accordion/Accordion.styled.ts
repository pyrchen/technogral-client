import styled from 'styled-components';

import { toPx } from '@/utils/formatting.utils';

const __AccordionWrapper = styled.div`
	width: 100%;
	background-color: #fafafa;
	padding: 25px 30px 25px 25px;
	border: 1px solid #e3e3e3;
	border-radius: 15px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const __AccordionTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const __AccordionAnswer = styled.div<{ isOpen: boolean; contentHeight: number }>`
	margin-top: ${({ isOpen }) => (isOpen ? '10px' : '0')};
	padding: ${({ isOpen }) => (isOpen ? '15px 15px 20px 15px' : '0')};
	background-color: #ffffff;
	border-radius: 10px;
	max-height: ${({ isOpen, contentHeight }) => (isOpen ? toPx(contentHeight) : '0')};
	overflow: hidden;
	transition:
		max-height 0.3s ease,
		margin-top 0.3s ease;
`;

const __AccordionIconWrapper = styled.div<{ isOpen: boolean }>`
	transition: transform 0.3s ease;
	transform: ${({ isOpen }) => (isOpen ? 'rotate(-180deg)' : 'rotate(0deg)')};
`;

export const AccordionCardParts = {
	__AccordionWrapper,
	__AccordionAnswer,
	__AccordionTitleWrapper,
	__AccordionIconWrapper,
};
