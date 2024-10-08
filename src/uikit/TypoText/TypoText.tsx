'use client';

import { FC } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import __TypeTextElements from '@/uikit/TypoText/TypoText.styled';
import { ITypoTextProps } from '@/uikit/TypoText/TypoText.types';

const TypoText: FC<ITypoTextProps> = ({
	children,
	text,
	as = TextTags.SPAN,
	weight = TextWeights.NORMAL,
	fontSize = 16,
	lineHeight = fontSize,
	decoration = 'none',
	transform = 'none',
	color = '#000000',
	...props
}) => {
	const __TextElement = __TypeTextElements[as];

	return (
		<__TextElement
			$weight={weight}
			$fontSize={fontSize}
			$decoration={decoration}
			$lineHeight={lineHeight}
			$color={color}
			$transform={transform}
			{...props}
		>
			{children || text}
		</__TextElement>
	);
};

export default TypoText;
