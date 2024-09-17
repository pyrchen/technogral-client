import styled from 'styled-components';

import { TextWeights } from '@/constants/text.contants';

const __GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const __GroupOptions = styled(__GroupWrapper)`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const __Title = styled.h6`
	font-size: 18px;
	font-weight: ${TextWeights.MEDIUM};
	color: #0a0a0a;
`;

export const RadioFieldsGroupParts = {
	__GroupWrapper,
	__GroupOptions,
	__Title,
};
