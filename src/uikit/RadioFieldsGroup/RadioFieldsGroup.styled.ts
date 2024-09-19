import styled from 'styled-components';

import { createMediumText } from '@/utils/styled.utils';

const __GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 21px;
`;

const __GroupOptions = styled(__GroupWrapper)`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

const __Title = styled.h6`
	${createMediumText(18)}
	color: #0a0a0a;
`;

export const RadioFieldsGroupParts = {
	__GroupWrapper,
	__GroupOptions,
	__Title,
};
