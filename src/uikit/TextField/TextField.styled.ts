import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';
import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { ITextFieldProps } from '@/uikit/TextField/TextField.types';
import { toPx } from '@/utils/formatting.utils';
import { createBaseTextStyles, createTransitionBase } from '@/utils/styled.utils';

type __Props = EveryWithDollarSign<ITextFieldProps>;

const Picks: TPickers<__Props> = {
	borderColor: ({ $error }) => ($error ? '#FF003D' : '#E3E3E3'),
	height: ({ $size }) => toPx($size === 'medium' ? 50 : 60),
	width: ({ $fullWidth }) => ($fullWidth ? '100%' : 'auto'),
};

const __Wrapper = styled.div<EveryWithDollarSign<ITextFieldProps>>`
	display: flex;
	flex-direction: column;
	width: ${Picks.width};
	gap: 7px;
`;

const __FieldWrapper = styled.div<EveryWithDollarSign<ITextFieldProps>>`
	height: ${Picks.height};
	display: inline-flex;
	gap: 8px;
`;

const __Input = styled.input<EveryWithDollarSign<ITextFieldProps>>`
	appearance: none;
	height: 100%;
	width: 100%;
	padding: 11px 12px;
	font-size: 16px;
	font-weight: ${TextWeights.MEDIUM};
	border: 1px solid ${Picks.borderColor};
	border-radius: 10px;
	background-color: #ffffff;
	${createTransitionBase()};

	&:focus {
		border-color: #0066ff;
	}

	&::placeholder {
		color: #b7b7b7;
	}
`;

const __ErrorText = styled.span`
	${createBaseTextStyles(14, TextWeights.MEDIUM)}
	color: #FF003D;
	padding: 0 9px;
`;

export const TextFieldParts = {
	__FieldWrapper,
	__Wrapper,
	__Input,
	__ErrorText,
};
