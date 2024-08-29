'use client';

import { FC } from 'react';

import { TextTags } from '@/constants/text.contants';
import StyledTypeTextElements from '@/uikit/TypoText/TypoText.styled';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';

const TypoText: FC<ITypoTextProps> = ({ children, as = TextTags.SPAN, ...props }) => {
	const StyledTextElement = StyledTypeTextElements[as];

	return <StyledTextElement {...props}>{children}</StyledTextElement>;
};

export default TypoText;
