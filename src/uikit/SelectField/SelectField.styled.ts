import styled from 'styled-components';

import { createMediumText, createTransitionBase } from '@/utils/styled.utils';

const __Wrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 407px;
	font-size: 16px;
	user-select: none;
`;

const __Select = styled.div<{ $isOpened: boolean; $selected: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 49px;
	padding: 0 15px;
	width: 417px;
	border: 1px solid ${({ $isOpened }) => ($isOpened ? '#0066FF' : '#e3e3e3')};
	border-radius: 10px;
	color: ${({ $selected }) => ($selected ? '#0A0A0A' : '#B7B7B7')};
	cursor: pointer;
	transition: 0.2s all;
`;

const __SelectIconWrapper = styled.div<{ $isOpened: boolean }>`
	display: flex;
	align-items: center;
	transform: ${({ $isOpened }) => `rotate(${$isOpened ? '180deg' : '0deg'});`};
	transition: 0.2s all;

	svg {
		fill: ${({ $isOpened }) => ($isOpened ? '#0447AB' : '#0A0A0A')}};
		${createTransitionBase()}
		
		path {
			fill: ${({ $isOpened }) => ($isOpened ? '#0447AB' : '#0A0A0A')}};
			${createTransitionBase()}
		}
	}
`;

const __Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const __CloseIcon = styled.div`
	position: relative;
	width: 17px;
	height: 17px;
	cursor: pointer;
	${createTransitionBase()}

	svg {
		${createTransitionBase()}
	}

	&:hover {
		svg {
			fill: #0447ab;
		}
	}

	svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
`;

const __OptionHoverIconWrapper = styled.div<{ $selected: boolean }>`
	display: flex;
	align-items: center;
	opacity: ${({ $selected }) => ($selected ? 1 : 0)};
	${createTransitionBase()}
`;

const __Option = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 49px;
	padding: 0 15px;
	cursor: pointer;

	&:not(:last-of-type) {
		border-bottom: 1px solid #e3e3e3;
	}

	&:hover {
		${__OptionHoverIconWrapper} {
			opacity: 1;
		}
	}
`;

const __OptionText = styled.span`
	display: inline-flex;
	${createMediumText(16)}
`;

const __OptionsBlock = styled.div<{ $isOpened: boolean }>`
	position: absolute;
	left: 0;
	right: 0;
	top: calc(100% + 5px);
	width: 100%;
	border: 1px solid #e3e3e3;
	border-radius: 10px;
	overflow: hidden;
	opacity: ${({ $isOpened }) => ($isOpened ? '1' : '0')};
	${createTransitionBase()}
`;

export const SelectFieldParts = {
	__Wrapper,
	__Select,
	__Option,
	__OptionText,
	__OptionsBlock,
	__SelectIconWrapper,
	__OptionHoverIconWrapper,
	__Icons,
	__CloseIcon,
};
