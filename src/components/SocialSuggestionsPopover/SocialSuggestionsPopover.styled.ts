import styled from 'styled-components';

import { EveryWithDollarSign } from '@/types/styled.types';
import { createFlexStyles, createMediumText, createTransitionBase } from '@/utils/styled.utils';

type __TUniqueProps = EveryWithDollarSign<{
	isOpened: boolean;
}>;

const __Wrapper = styled.div<__TUniqueProps>`
	--arrow-width: 29px;

	position: fixed;
	${createFlexStyles()}

	top: 300px;
	right: 0;
	transform: ${({ $isOpened }) => ($isOpened ? 'translateX(0);' : 'translateX(calc(100% - var(--arrow-width)))')};

	${createTransitionBase()}
`;

const __ArrowBlock = styled.div<__TUniqueProps>`
	${createFlexStyles()}
	height: 91px;
	width: var(--arrow-width);
	background-color: #ffffff;
	border: 1px solid #f0f0f0;
	border-radius: 7px 0 0 7px;
	cursor: pointer;
	${createTransitionBase()}

	&:hover {
		background-color: #769cff;

		svg {
			path {
				fill: #ffffff;
			}
		}
	}

	svg {
		transform: ${({ $isOpened }) => ($isOpened ? 'rotate3d(0, 0, 1, -90deg)' : 'rotate3d(0, 0, 1, 90deg)')};
		${createTransitionBase()}

		path {
			transition: inherit;
		}
	}
`;

const __SocialsBlock = styled.div`
	${createFlexStyles()}
	flex-direction: column;
	background-color: #ffffff;
	border: 1px solid #f0f0f0;
	border-radius: 6px 0 0 6px;
`;

const __SocialItem = styled.div`
	${createFlexStyles()}
	gap: 6px;
`;

const __SocialText = styled.span`
	${createMediumText(16)}
	color: #0A0A0A;
`;

export const SocialSuggestionsPopoverParts = {
	__Wrapper,
	__SocialItem,
	__SocialText,
	__SocialsBlock,
	__ArrowBlock,
};
