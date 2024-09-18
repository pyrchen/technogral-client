import styled, { useTheme } from 'styled-components';

import { FC, useEffect, useRef, useState } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import { ArrowBottomIcon } from '@/icons';
import { TypoText } from '@/uikit';

import { AccordionCardParts } from './Accordion.styled';
import { IAccordionComponentProps } from './Accordion.types';

const Accordion: FC<IAccordionComponentProps> = ({ question, answer, ...props }) => {
	const Theme = useTheme();

	const [contentHeight, setContentHeight] = useState(0); // Состояние для высоты контента
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null); // Реф для измерения высоты контента

	const toggleAccordion = () => {
		setIsOpen((prev) => !prev);
	};

	useEffect(() => {
		// Определяем высоту контента при каждом изменении isOpen
		if (contentRef.current && isOpen) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [isOpen]);

	return (
		<AccordionCardParts.__AccordionWrapper
			{...props}
			onClick={toggleAccordion}
		>
			<AccordionCardParts.__AccordionTitleWrapper>
				<TypoText
					fontSize={16}
					as={TextTags.H3}
					weight={TextWeights.SEMI_BOLD}
					color={Theme.text.TEXT_2}
					lineHeight={22}
				>
					{question}
				</TypoText>
				<AccordionCardParts.__AccordionIconWrapper isOpen={isOpen}>
					<ArrowBottomIcon />
				</AccordionCardParts.__AccordionIconWrapper>
			</AccordionCardParts.__AccordionTitleWrapper>
			<AccordionCardParts.__AccordionAnswer
				isOpen={isOpen}
				contentHeight={isOpen ? contentHeight : 0} // Управляем высотой с помощью состояния
				ref={contentRef}
			>
				<TypoText
					fontSize={16}
					as={TextTags.H3}
					weight={TextWeights.NORMAL}
					color={Theme.text.TEXT_2}
					lineHeight={22}
				>
					{answer}
				</TypoText>
			</AccordionCardParts.__AccordionAnswer>
		</AccordionCardParts.__AccordionWrapper>
	);
};

export default Accordion;
