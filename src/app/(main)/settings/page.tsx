'use client';

import styled, { useTheme } from 'styled-components';

import { ContentContainer, SettingCardList } from '@/components';
import { TextWeights } from '@/constants/text.contants';
import { UnauthorisedForbiddenRoute } from '@/lib/protectedRoute';
import { Button, TypoText } from '@/uikit';

export default function Home() {
	const Theme = useTheme();
	return (
		<UnauthorisedForbiddenRoute>
			<ContentContainer>
				<__SettingsText>
					<TypoText
						weight={TextWeights.SEMI_BOLD}
						color={Theme.TEXT.TEXT_2}
						lineHeight={40}
						fontSize={28}
					>
						Настройки
					</TypoText>
					<div>
						<TypoText
							weight={TextWeights.SEMI_BOLD}
							color={Theme.TEXT.TEXT_2}
							lineHeight={25}
							fontSize={18}
						>
							Олег Вещий,
						</TypoText>
						<TypoText
							weight={TextWeights.NORMAL}
							color={Theme.TEXT.TEXT_2}
							lineHeight={25}
							fontSize={18}
						>
							victor@mail.ru
						</TypoText>
					</div>
				</__SettingsText>
				<Button variant='none'>
					<TypoText
						weight={TextWeights.NORMAL}
						color={Theme.TEXT.TEXT_6}
						lineHeight={22}
					>
						Удалить аккаунт
					</TypoText>
				</Button>
				<SettingCardList />
			</ContentContainer>
		</UnauthorisedForbiddenRoute>
	);
}

const __SettingsText = styled.div`
	margin-bottom: 25px;
	display: flex;
	gap: 10px;
	flex-direction: column;
`;
