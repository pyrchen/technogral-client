'use client';

import styled from 'styled-components';

import { ContentContainer, SideButtons } from '@/components';

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
			<ArticlesList />
			<SideButtons data-side-buttons />
		</ContentContainer>
	);
}
