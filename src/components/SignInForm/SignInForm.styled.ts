import styled from 'styled-components';

import { createFlexStyles } from '@/utils/styled.utils';

const __SignInFormWindow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 45px 50px 38px 50px;
	width: 476px;
	background-color: #ffffff;
	border-radius: 10px;
`;

const __SignInForm = styled.form`
	width: 100%;
	margin-top: 30px;
`;

const __SignInFormFields = styled.div`
	${createFlexStyles()}
	flex-direction: column;
	gap: 10px;
`;

const __SignInFormButtons = styled.div`
	${createFlexStyles()}
	flex-direction: column;
	gap: 19px;
	margin-top: 15px;
	margin-bottom: 15px;
`;

const __ForgotPassword = styled.div`
	width: 100%;
	text-align: right;
`;

const __ContinueWith = styled.div`
	${createFlexStyles()}
	gap: 10px;
`;

const __ContinueWithIcon = styled.div`
	width: 25px;
	height: 25px;

	& > svg {
		width: 100%;
		height: 100%;
	}
`;

export const SignIpFormParts = {
	__SignInFormWindow,
	__SignInForm,
	__SignInFormFields,
	__SignInFormButtons,
	__ForgotPassword,
	__ContinueWith,
	__ContinueWithIcon,
};
