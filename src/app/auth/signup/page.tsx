'use client';

import styled from 'styled-components';

import { ContentContainer } from '@/components';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import { AuthorisedForbiddenRoute } from '@/lib/protectedRoute';

const __FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 240px;
`;

export default function SignUpPage() {
	return (
		<AuthorisedForbiddenRoute>
			<ContentContainer>
				<__FormContainer>
					<SignUpForm />
				</__FormContainer>
			</ContentContainer>
		</AuthorisedForbiddenRoute>
	);
}
