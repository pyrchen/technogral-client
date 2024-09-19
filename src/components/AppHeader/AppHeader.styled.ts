import styled from 'styled-components';

// export const __AppHeader = styled.div`
// 	padding: 35px 0 0 0;
// 	/* position: fixed; */
// `;
export const __AppHeader = styled.div<{ isScrolled: boolean }>`
	padding: 35px 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ isScrolled }) => (isScrolled ? '#FAFAFA' : 'transparent')};
	transition:
		background-color 0.3s ease,
		position 0.3s ease;
	z-index: 1000;
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
