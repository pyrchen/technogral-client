import { useTheme } from 'styled-components';

import { FC } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import { TypoText } from '@/uikit';

import { SettingCardParts } from './SettingCard.styled';
import { ISettingCardComponentProps } from './SettingCard.types';

const SettingCard: FC<ISettingCardComponentProps> = ({ title, desc, icon, ...props }) => {
	const Theme = useTheme();

	return (
		<SettingCardParts.__CardWrapper {...props}>
			<SettingCardParts.__IconWrapper>{icon}</SettingCardParts.__IconWrapper>
			<SettingCardParts.__SettingCardTitle>
				<TypoText
					fontSize={16}
					as={TextTags.H3}
					weight={TextWeights.SEMI_BOLD}
					color={Theme.text.TEXT_4}
				>
					{title}
				</TypoText>
			</SettingCardParts.__SettingCardTitle>
			<SettingCardParts.__SettingCardDesc>
				<TypoText
					fontSize={14}
					as={TextTags.P}
					weight={TextWeights.NORMAL}
					color='#BCBCBC'
				>
					{desc}
				</TypoText>
			</SettingCardParts.__SettingCardDesc>
		</SettingCardParts.__CardWrapper>
	);
};

export default SettingCard;
