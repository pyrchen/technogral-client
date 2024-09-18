'use client';

import styled from 'styled-components';

import { ContentContainer } from '@/components';
import SignUpForm from '@/components/SignUpForm/SignUpForm';

const __FormContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 152px;
`;

export default function SignUpPage() {
	return (
		<ContentContainer>
			<__FormContainer>
				<SignUpForm />
			</__FormContainer>
		</ContentContainer>
	);
}
