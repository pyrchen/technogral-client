import { useTheme } from 'styled-components';

import { FC } from 'react';

import { TextTags, TextWeights } from '@/constants/text.contants';
import { TypoText } from '@/uikit';

import { RacingParts } from './RacingCard.styled';
import { ISettingCardComponentProps } from './RacingCard.types';

const RacingCard: FC<ISettingCardComponentProps> = ({ title, desc, subdesc, price }) => {
	const Theme = useTheme();

	return (
		<RacingParts.__Card>
			<RacingParts.__CardCheckBox />
			<RacingParts.__CardImage
				src='https://avotar.ru/avatar/krutye/150/32.jpg'
				alt=''
			/>
			<RacingParts.__CardTextWrapper>
				<RacingParts.__CardFlexContainer>
					<RacingParts.__CardTitle>
						<TypoText
							fontSize={22}
							as={TextTags.H3}
							weight={TextWeights.SEMI_BOLD}
							color={Theme.text.TEXT_2}
						>
							{title}
						</TypoText>
					</RacingParts.__CardTitle>
					<RacingParts.__CardCircle />
					<RacingParts.__CardPrice>
						<TypoText
							fontSize={18}
							as={TextTags.SPAN}
							weight={TextWeights.MEDIUM}
							color={Theme.MAIN.MAIN_3}
						>
							{price}
						</TypoText>
					</RacingParts.__CardPrice>
				</RacingParts.__CardFlexContainer>
				<RacingParts.__CardDesc>
					<TypoText
						lineHeight={22.4}
						fontSize={16}
						as={TextTags.P}
						weight={TextWeights.SEMI_BOLD}
						color={Theme.text.TEXT_2}
					>
						{desc}
					</TypoText>
				</RacingParts.__CardDesc>
				<RacingParts.__CardSubDesc>
					<TypoText
						lineHeight={22.4}
						fontSize={16}
						as={TextTags.P}
						weight={TextWeights.NORMAL}
						color={Theme.text.TEXT_2}
					>
						{subdesc}
					</TypoText>
				</RacingParts.__CardSubDesc>
				<RacingParts.__CardButton>
					<TypoText
						fontSize={14}
						weight={TextWeights.MEDIUM}
						color={Theme.MAIN.MAIN_3}
					>
						Развернуть
					</TypoText>
				</RacingParts.__CardButton>
			</RacingParts.__CardTextWrapper>
		</RacingParts.__Card>
	);
};

export default RacingCard;
