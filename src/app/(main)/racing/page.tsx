'use client';

import styled, { useTheme } from 'styled-components';

import { ContentContainer, RacingCardList } from '@/components';
import { Button, TypoText } from '@/uikit';

export default function Home() {
	const Theme = useTheme();
	return (
		<ContentContainer>
			<RacingCardList />
			<Button
				variant='filled'
				style={{
					width: 280,
					display: 'block',
					margin: 'auto',
					marginBottom: 50,
					borderRadius: 10,
				}}
				size='large'
			>
				<TypoText color={Theme.MAIN.MAIN_4}>Продолжить в VK</TypoText>
			</Button>
		</ContentContainer>
	);
}
