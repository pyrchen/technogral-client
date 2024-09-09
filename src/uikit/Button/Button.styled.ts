import styled from 'styled-components';

import { TStyledPropsPicker } from '@/types/styled.types';
import { ButtonFontSizes, ButtonSizes } from '@/uikit/Button/Button.constants';
import { IButtonProps } from '@/uikit/Button/Button.types';
import { toPx } from '@/utils/formatting.utils';

type TPicker = TStyledPropsPicker<IButtonProps>;

const bgColorDefaultPicker: TPicker = ({ theme }) => theme.button.default;
const bgColorHoverPicker: TPicker = ({ theme }) => theme.button.hover;
const colorPicker: TPicker = ({ theme }) => theme.MAIN.MAIN_5;
const heightPicker: TPicker = ({ size }) => toPx(ButtonSizes[size!]);
const fontSizePicker: TPicker = ({ size }) => toPx(ButtonFontSizes[size!]);

const __Button = styled.button<IButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: ${bgColorDefaultPicker};
	color: ${colorPicker};
	height: ${heightPicker};
	font-size: ${fontSizePicker};
	padding: 10px 15px 10px 15px;
	border-radius: 7px;
	transition-duration: 0.25s;
	cursor: pointer;

	&:hover {
		background-color: ${bgColorHoverPicker};
	}

	&:active {
		transition-duration: 0.1s;
		transform: scale(0.96);
	}
`;

export default __Button;
