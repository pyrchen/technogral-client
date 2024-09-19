import styled from 'styled-components';

import { TNullable } from '@/types/base';
import { TStyledPropsPicker } from '@/types/styled.types';
import { isNull } from '@/utils/typesChecking.utils';

type TAppHeaderProps = {
	$isScrolled: TNullable<boolean>;
};

const bgPicker: TStyledPropsPicker<TAppHeaderProps> = ({ $isScrolled }) => {
	if (isNull($isScrolled)) return '#ffffff';
	return $isScrolled ? '#FAFAFA' : 'transparent';
};

export const __AppHeader = styled.div<TAppHeaderProps>`
	padding: 35px 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${bgPicker};
	transition:
		background-color 0.3s ease,
		position 0.3s ease;
	z-index: 1000;
`;

export const __Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto auto;
	grid-template-rows: 50px;
	gap: 24px;
`;

export const __Links = styled.div`
	display: flex;
	gap: 27px;
`;

export const __ButtonsLinks = styled(__Links)`
	gap: 10px;
`;
