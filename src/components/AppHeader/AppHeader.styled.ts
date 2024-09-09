import styled from 'styled-components';

export const __AppHeader = styled.div`
	padding: 35px 0 0 0;
`;

export const __Grid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto auto;
	grid-template-rows: 50px;
	gap: 24px;
`;

export const __Links = styled.div`
	display: flex;
	gap: 27px;
`;

export const __ButtonsLinks = styled(__Links)`
	gap: 10px;
`;
