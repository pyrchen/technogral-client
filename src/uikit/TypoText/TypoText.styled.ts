import styled from 'styled-components';

import { TextTags } from '@/constants/text.contants';
import { TStyledPropsPicker } from '@/types/styled.types';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';
import { toPx } from '@/utils/formatting.utils';

type TPicker = TStyledPropsPicker<Omit<ITypoTextProps, 'as'>>;
type TStyledTypoTextElements = Record<TextTags, ReturnType<typeof createStyledTypoText>>;

const fontSize: TPicker = ({ fontSize }) => toPx(fontSize!);
const color: TPicker = ({ color }) => color!;

const createStyledTypoText = (tag: TextTags) => styled(tag)`
	display: inline-flex;
	font-size: ${fontSize};
	line-height: ${fontSize};
	color: ${color};
`;

// Create object of styled elements in order to avoid react errors when creating
// styled element inside a component
const StyledTypeTextElements = Object.values(TextTags).reduce((acc, tag) => {
	acc[tag] = createStyledTypoText(tag);
	return acc;
}, {} as TStyledTypoTextElements);

export default StyledTypeTextElements;
