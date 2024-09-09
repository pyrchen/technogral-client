import styled from 'styled-components';

import { EveryWithDollarSign, TStyledPropsPicker } from '@/types/styled.types';
import { ButtonFontSizes, ButtonSizes } from '@/uikit/Button/Button.constants';
import { IButtonProps } from '@/uikit/Button/Button.types';
import { toPx } from '@/utils/formatting.utils';

type TPicker = TStyledPropsPicker<EveryWithDollarSign<IButtonProps>>;

const bgColorDefaultPicker: TPicker = ({ theme }) => theme.button.default;
const bgColorHoverPicker: TPicker = ({ theme }) => theme.button.hover;
const colorPicker: TPicker = ({ theme }) => theme.MAIN.MAIN_5;
const heightPicker: TPicker = ({ $size }) => toPx(ButtonSizes[$size!]);
const fontSizePicker: TPicker = ({ $size }) => toPx(ButtonFontSizes[$size!]);

const __ButtonBase = styled.button<EveryWithDollarSign<Omit<IButtonProps, 'variant'>>>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: ${colorPicker};
	height: ${heightPicker};
	font-size: ${fontSizePicker};
	font-weight: 500;
	padding: 10px 15px 10px 15px;
	border-radius: 7px;
	transition-duration: 0.25s;
	cursor: pointer;

	&:active {
		transition-duration: 0.1s;
		transform: scale(0.96);
	}
`;

const __FilledButton = styled(__ButtonBase)`
	background-color: ${bgColorDefaultPicker};

	&:hover {
		background-color: ${bgColorHoverPicker};
	}
`;

const __OutlinedButton = styled(__ButtonBase)`
	border: 1px solid #e3e3e3;
	background-color: transparent;
	color: ${({ theme }) => theme.text.TEXT_2};
`;

export const ButtonVariants = {
	filled: __FilledButton,
	outlined: __OutlinedButton,
} as const;
