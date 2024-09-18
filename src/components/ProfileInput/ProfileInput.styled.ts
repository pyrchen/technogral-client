import styled from 'styled-components';

import { toPx } from '@/utils/formatting.utils';

const __ProfileInputWrapper = styled.div<{ $width: string | number }>`
	background-color: #fafafa;
	padding: 22px 15px 15px 15px;
	border: 1px solid #e3e3e3;
	border-radius: 15px;
	width: ${({ $width }) => (typeof $width === 'string' ? $width : toPx($width || 0))};
`;

const __ProfileInput = styled.input<{ $inputTextColor?: string; $border?: string; $padding?: string }>`
	padding: ${({ $padding }) => $padding! || '10px 15px'};
	background-color: #ffffff;
	font-size: 16px;
	width: 100%;
	font-weight: 500;
	color: ${({ $inputTextColor }) => $inputTextColor! || '#0A0A0A'};
	border-radius: 15px;
	border: ${({ $border }) => $border!};

	&::placeholder {
		font-size: 16px;
		font-weight: 400;
		color: #898989;
	}
`;

const __ProfileInputText = styled.h3`
	font-size: 18px;
	font-weight: 500;
	line-height: 25px;
	margin-bottom: 10px;
`;

export const ProfileInputParts = {
	__ProfileInputWrapper,
	__ProfileInputText,
	__ProfileInput,
};
