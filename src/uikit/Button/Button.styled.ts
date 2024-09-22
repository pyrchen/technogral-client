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
const widthPicker: TPicker = ({ $fullWidth }) => ($fullWidth ? '100%' : 'auto');

const __ButtonBase = styled.button<EveryWithDollarSign<Omit<IButtonProps, 'variant'>>>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: ${colorPicker};
	height: ${heightPicker};
	width: ${widthPicker};
	font-size: ${fontSizePicker};
	font-weight: 500;
	padding: 10px 15px 10px 15px;
	border-radius: 10px;
	transition: 0.25s all;
	cursor: pointer;

	&:active:not(:disabled) {
		transition-duration: 0.1s;
		transform: scale(0.96);
	}
`;

const __FilledButton = styled(__ButtonBase)`
	background-color: ${bgColorDefaultPicker};

	&:hover {
		background-color: ${bgColorHoverPicker};
	}

	&:disabled {
		color: #7c7c7c;
		background-color: #e3e3e3;
	}
`;

const __OutlinedButton = styled(__ButtonBase)`
	border: 1px solid #e3e3e3;
	background-color: transparent;
	color: ${({ theme }) => theme.text.TEXT_2};
`;

const __NoneButton = styled(__ButtonBase)`
	border: none;
	color: #7c7c7c;
	background-color: white;
	padding: 0;
	height: auto;
`;

export const ButtonVariants = {
	filled: __FilledButton,
	outlined: __OutlinedButton,
	none: __NoneButton,
} as const;
