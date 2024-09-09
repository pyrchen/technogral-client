'use client';

import { FC } from 'react';

import { SideButtonsParts } from '@/components/SideButtons/SideButtons.styled';
import { ISideButtonsComponentProps } from '@/components/SideButtons/SideButtons.types';
import { ArrowTopNoTailIcon, QuestionMarkIcon } from '@/icons';

const sideButtonsData = [{ Icon: QuestionMarkIcon }, { Icon: ArrowTopNoTailIcon }];

const SideButtons: FC<ISideButtonsComponentProps> = (props) => {
	return (
		<SideButtonsParts.__SideButtonsWrapper {...props}>
			{sideButtonsData.map(({ Icon }, index) => (
				<SideButtonsParts.__SideButton key={index}>{<Icon />}</SideButtonsParts.__SideButton>
			))}
		</SideButtonsParts.__SideButtonsWrapper>
	);
};

export default SideButtons;
