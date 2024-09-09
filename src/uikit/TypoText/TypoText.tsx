'use client';

import { FC } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import StyledTypeTextElements from '@/uikit/TypoText/TypoText.styled';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';

const TypoText: FC<ITypoTextProps> = ({
	children,
	text,
	as = TextTags.SPAN,
	weight = TextWeights.NORMAL,
	fontSize = 16,
	decoration = 'none',
	...props
}) => {
	const StyledTextElement = StyledTypeTextElements[as];

	return (
		<StyledTextElement
			weight={weight}
			fontSize={fontSize}
			decoration={decoration}
			{...props}
		>
			{children || text}
		</StyledTextElement>
	);
};

export default TypoText;
