import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';
import { TStyledPropsPicker } from '@/types/styled.types';
import { ITextInputProps } from '@/uikit/TextInput/TextInput.types';
import { toPx } from '@/utils/formatting.utils';

type TPickerInput = TStyledPropsPicker<ITextInputProps>;

const borderColorPicker: TPickerInput = ({ theme }) => theme.MAIN.MAIN_2;
const bgColorPicker: TPickerInput = ({ theme }) => theme.MAIN.MAIN_5;
const heightPicker: TPickerInput = ({ size }) => toPx(size === 'medium' ? 50 : 60);

export const __Input = styled.input<ITextInputProps>`
	width: 100%;
	font-size: 16px;
	font-weight: ${TextWeights.MEDIUM};
	background-color: transparent;
`;

export const __InputWrapper = styled.div<ITextInputProps>`
	display: inline-flex;
	border-radius: 10px;
	height: ${heightPicker};
	border: 1px solid ${borderColorPicker};
	gap: 8px;
	padding: 11px 12px;
	background-color: ${bgColorPicker};
`;
