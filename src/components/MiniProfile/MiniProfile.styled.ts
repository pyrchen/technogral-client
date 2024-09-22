import styled from 'styled-components';

import { createFlexStyles } from '@/utils/styled.utils';

const __Wrapper = styled.div`
	${createFlexStyles.withGap(10, 'flex', 'center', 'flex-end')}
`;

const __MiniBlock = styled.div`
	width: 50px;
	height: 50px;
`;

const __IconBlock = styled.div`
	width: 26px;
	height: 26px;
`;

const __ThemeBlock = styled.div`
	${createFlexStyles()}
	height: 100%;
	border-radius: 10px;
	background-color: #0a0a0a;
`;

export const MiniProfileParts = {
	__Wrapper,
	__MiniBlock,
	__IconBlock,
	__ThemeBlock,
};
