import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';

const __Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	gap: 5px;
`;

const __RoleText = styled.h6`
	font-size: 14px;
	color: #898989;
	font-weight: ${TextWeights.MEDIUM};
`;

const __RoleValueText = styled.span`
	font-size: 18px;
	font-weight: ${TextWeights.MEDIUM};
	color: #0066ff;
`;

const __RoleValueBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 7px;
`;

export const UserRoleParts = {
	__Wrapper,
	__RoleText,
	__RoleValueText,
	__RoleValueBlock,
};
