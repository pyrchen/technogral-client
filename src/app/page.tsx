'use client';

import styled from 'styled-components';

import { ArticlesList, ContentContainer, PageBanner, SideButtons } from '@/components';

const __Banner = styled.div`
	margin-bottom: 40px;
`;

export default function Home() {
	return (
		<ContentContainer>
			<__Banner>
				<PageBanner />
			</__Banner>
			<ArticlesList />
			<SideButtons data-side-buttons />
		</ContentContainer>
	);
}
