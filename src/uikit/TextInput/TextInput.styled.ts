import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';
import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { ITextInputProps } from '@/uikit/TextInput/TextInput.types';
import { toPx } from '@/utils/formatting.utils';

type __Props = EveryWithDollarSign<ITextInputProps>;

const Picks: TPickers<__Props> = {
	borderColor: ({ theme }) => theme.MAIN.MAIN_2,
	bgColor: ({ theme }) => theme.MAIN.MAIN_5,
	height: ({ $size }) => toPx($size === 'medium' ? 50 : 60),
};

export const __Input = styled.input<EveryWithDollarSign<ITextInputProps>>`
	width: 100%;
	font-size: 16px;
	font-weight: ${TextWeights.MEDIUM};
	background-color: transparent;
`;

export const __InputWrapper = styled.div<EveryWithDollarSign<ITextInputProps>>`
	display: inline-flex;
	border-radius: 10px;
	height: ${Picks.height};
	border: 1px solid ${Picks.borderColor};
	gap: 8px;
	padding: 11px 12px;
	background-color: ${Picks.bgColor};
`;
