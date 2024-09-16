import styled from 'styled-components';

import { ITabProps } from '@/components/Tab/Tab.types';
import { EveryWithDollarSign, TPickers } from '@/types/styled.types';

type __Props = EveryWithDollarSign<Omit<ITabProps, 'tabName' | 'onClick'>>;

const Picks: TPickers<__Props> = {
	bgColorUnderline: ({ $active }) => ($active ? '#565656' : 'transparent'),
};

export const __TabUnderline = styled.div`
	width: 100%;
	height: 2px;
	border-radius: 2px;
	background-color: transparent;
	transition: 0.2s all;
`;

export const __TabWrapper = styled.div<__Props>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: fit-content;
	gap: 7px;
	cursor: pointer;

	& ${__TabUnderline} {
		background-color: ${Picks.bgColorUnderline};
	}

	&:hover ${__TabUnderline} {
		background-color: #565656;
	}
`;

export const TabParts = {
	__TabWrapper,
	__TabUnderline,
};
