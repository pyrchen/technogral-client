import styled from 'styled-components';

import { TextTags } from '@/constants/text.contants';
import { TPickers } from '@/types/styled.types';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';
import { toPx } from '@/utils/formatting.utils';

type TStyledTypoTextElements = Record<TextTags, ReturnType<typeof createStyledTypoText>>;

const Picks: TPickers<Omit<ITypoTextProps, 'as'>> = {
	fontSize: ({ fontSize }) => toPx(fontSize!),
	color: ({ color }) => color!,
	fontWeight: ({ weight }) => `${weight!}`,
	textDecoration: ({ decoration }) => decoration || 'none',
};

const createStyledTypoText = (tag: TextTags) => styled(tag)<ITypoTextProps>`
	display: inline-flex;
	font-size: ${Picks.fontSize};
	font-weight: ${Picks.fontWeight};
	line-height: ${Picks.fontSize};
	color: ${Picks.color};
	text-decoration: ${Picks.textDecoration};
`;

// Create object of styled elements in order to avoid react errors when creating
// styled element inside a component
const __TypeTextElements = Object.values(TextTags).reduce((acc, tag) => {
	acc[tag] = createStyledTypoText(tag);
	return acc;
}, {} as TStyledTypoTextElements);

export default __TypeTextElements;
