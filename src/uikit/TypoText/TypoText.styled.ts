import styled from 'styled-components';

import { TextTags } from '@/constants/text.contants';
import { EveryWithDollarSign, TPickers } from '@/types/styled.types';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';
import { toPx } from '@/utils/formatting.utils';

type TStyledTypoTextElements = Record<TextTags, ReturnType<typeof createStyledTypoText>>;

const Picks: TPickers<Omit<EveryWithDollarSign<ITypoTextProps>, '$as'>> = {
	fontSize: ({ $fontSize }) => toPx($fontSize!),
	color: ({ $color }) => $color!,
	fontWeight: ({ $weight }) => `${$weight!}`,
	lineHeight: ({ $lineHeight }) => toPx($lineHeight!),
	textDecoration: ({ $decoration }) => $decoration || 'none',
	textTransform: ({ $transform }) => $transform || 'none',
};

const createStyledTypoText = (tag: TextTags) => styled(tag)<EveryWithDollarSign<ITypoTextProps>>`
	display: inline-flex;
	font-size: ${Picks.fontSize};
	font-weight: ${Picks.fontWeight};
	line-height: ${Picks.lineHeight};
	text-decoration: ${Picks.textDecoration};
	text-transform: ${Picks.textTransform};
	color: ${Picks.color};
`;

// Create object of styled elements in order to avoid react errors when creating
// styled element inside a component
const __TypeTextElements = Object.values(TextTags).reduce((acc, tag) => {
	acc[tag] = createStyledTypoText(tag);
	return acc;
}, {} as TStyledTypoTextElements);

export default __TypeTextElements;
