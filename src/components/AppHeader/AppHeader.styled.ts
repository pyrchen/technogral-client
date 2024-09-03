import styled from 'styled-components';

export const StyledAppHeader = styled.div`
	padding: 35px 0;
`;

export const StyledGrid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto auto;
	grid-template-rows: 50px;
	gap: 24px;
`;

export const StyledLinks = styled.div`
	display: flex;
	gap: 27px;
`;

export const StyledButtonsLinks = styled(StyledLinks)`
	gap: 10px;
`;
