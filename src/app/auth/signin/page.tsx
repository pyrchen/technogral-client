'use client';

import styled from 'styled-components';

import { ContentContainer, SignInForm } from '@/components';
import { AuthorisedForbiddenRoute } from '@/lib/protectedRoute';

const __FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 240px;
`;

export default function SignInPage() {
	return (
		<AuthorisedForbiddenRoute>
			<ContentContainer>
				<__FormContainer>
					<SignInForm />
				</__FormContainer>
			</ContentContainer>
		</AuthorisedForbiddenRoute>
	);
}
