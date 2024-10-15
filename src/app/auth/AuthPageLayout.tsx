'use client';

import styled, { createGlobalStyle } from 'styled-components';

import React, { PropsWithChildren } from 'react';

import { AppHeader, Toasts } from '@/components';

const __PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
	overflow-x: hidden;
	background-color: #fafafa;
`;

const __MainContainer = styled.main`
	flex: 1 1 0;
	width: 100%;
`;

const GlobalStyles = createGlobalStyle`
	body {
		height: 100vh;
		overflow: hidden;
	}
`;

export default function AuthPageLayout({ children }: PropsWithChildren) {
	return (
		<__PageContainer
			id='root'
			className='root'
		>
			<GlobalStyles />
			<AppHeader />
			<__MainContainer>{children}</__MainContainer>
			<Toasts />
		</__PageContainer>
	);
}
