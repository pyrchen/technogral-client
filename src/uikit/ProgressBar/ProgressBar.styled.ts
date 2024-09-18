import styled from 'styled-components';

import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { toPx } from '@/utils/formatting.utils';

import { IProgressBarProps } from './ProgressBar.types';

type TypeProps = EveryWithDollarSign<Omit<IProgressBarProps, 'title'>>;

const Picks = {
	width: ({ $width }) => (typeof $width === 'string' ? $width : toPx($width || 0)),
	color: ({ $color }) => $color!,
} satisfies TPickers<TypeProps>;

const __ProgressBarWrapper = styled.div<{ $width: string | number }>`
	margin-top: 5px;
	height: 4px;
	position: relative;
	overflow: hidden;
	width: ${({ $width }) => (typeof $width === 'string' ? $width : toPx($width || 0))};
	background-color: #e3e3e3;
	border-radius: 10px;
`;

const __ProgressIndicator = styled.div<TypeProps>`
	width: ${({ $progress }) => `${$progress * 100}%`};
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
