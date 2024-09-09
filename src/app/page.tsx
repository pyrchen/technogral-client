'use client';

import styled from 'styled-components';

import { ContentContainer, SideButtons } from '@/components';
import { TextTags } from '@/constants/text.contants';
import { Button, TypoText } from '@/uikit';

import ArticlesList from '../components/ArticlesList/ArticlesList';

const __PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	& > [data-side-buttons] {
		position: fixed;
		top: 50%;
		right: -60px;
		transform: translateY(-50%);
	}
`;

export default function Home() {
	return (
		<ContentContainer>
			{/*<Button size={'small'}>Заказать разгон</Button>*/}
			<br />
			<br />
			{/*<Button size={'medium'}>Заказать разгон</Button>*/}
			<br />
			<br />
			<Button size={'large'}>Заказать разгон</Button>
			<br />
			<br />
			<TypoText
				as={TextTags.H1}
				color='red'
				fontSize={24}
			>
				Hello World
			</TypoText>
			<TypoText
				as={TextTags.H2}
				color='green'
				fontSize={20}
			>
				Hello World
			</TypoText>
			<TypoText
				as={TextTags.H3}
				color='blue'
				fontSize={16}
			>
				Hello World
			</TypoText>
			<ArticlesList />
			<SideButtons data-side-buttons />
		</ContentContainer>
	);
}
