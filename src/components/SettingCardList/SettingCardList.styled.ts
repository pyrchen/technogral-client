import styled from 'styled-components';

const __SettingCardList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, auto);
	gap: 20px;
	margin-top: 50px;
	margin-bottom: 50px;
`;

export const SettingCardListParts = {
	__SettingCardList,
};
