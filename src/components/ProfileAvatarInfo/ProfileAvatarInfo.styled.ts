import styled from 'styled-components';

const __Wrapper = styled.div`
	display: grid;
	grid-template-columns: 140px 190px;
	grid-template-rows: 140px;
	align-items: center;
	column-gap: 30px;
`;

const __InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ProfileAvatarInfoParts = {
	__Wrapper,
	__InfoWrapper,
};
