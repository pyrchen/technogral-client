import styled from 'styled-components';

import { TPickers } from '@/types/styled.types';
import { toPx } from '@/utils/formatting.utils';

import { IProgressBarProps } from './ProgressBar.types';

const Picks: TPickers<IProgressBarProps> = {
	width: ({ $width }) => (typeof $width === 'string' ? $width : toPx($width || 0)),
	color: ({ color }) => color!,
};

const __ProgressBarWrapper = styled.div<IProgressBarProps>`
	margin-top: 5px;
	height: 4px;
	position: relative;
	overflow: hidden;
	width: ${Picks.width};
	background-color: #e3e3e3;
	border-radius: 10px;
`;

const __ProgressIndicator = styled.div<IProgressBarProps>`
	width: ${({ progress }) => (progress / 190) * 100}%;
	background-color: ${Picks.color};
	height: 100%;
	border-radius: 10px;
	transition: width 0.3s ease; /* Плавный переход для индикатора */
	position: absolute; /* Позиционируем относительно обертки */
	top: 0;
	left: 0;
`;

export const __ProgressBarParts = {
	__ProgressIndicator,
	__ProgressBarWrapper,
};
