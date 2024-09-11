'use client';

import styled from 'styled-components';

import { ContentContainer, SignInForm } from '@/components';

const __FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 152px;
`;

export default function SignInPage() {
	return (
		<ContentContainer>
			<__FormContainer>
				<SignInForm />
			</__FormContainer>
		</ContentContainer>
	);
}
