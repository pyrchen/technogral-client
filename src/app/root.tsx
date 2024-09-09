'use client';

import styled from 'styled-components';

import React, { PropsWithChildren } from 'react';

import { AppFooter, AppHeader } from '@/components';

const StyledPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	min-height: 100vh;
	overflow-x: hidden;
`;

const StyledMainContainer = styled.main`
	flex: 1 1 0;
	width: 100%;
	margin: 0 auto;
`;

export default function RootComponent({ children }: PropsWithChildren) {
	return (
		<StyledPageContainer
			id='root'
			className='root'
		>
			<AppHeader />
			<StyledMainContainer>{children}</StyledMainContainer>
			<AppFooter />
		</StyledPageContainer>
	);
}
