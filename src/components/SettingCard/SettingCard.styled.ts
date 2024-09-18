import styled from 'styled-components';

const __CardWrapper = styled.div`
	max-width: 400px;
	width: 100%;
	background-color: #fafafa;
	padding: 30px 25px;
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 10px;
`;

const __IconWrapper = styled.div`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const __SettingCardTitle = styled.div`
	margin-top: 28px;
`;

const __SettingCardDesc = styled.div`
	margin-top: 8px;
`;

export const SettingCardParts = {
	__CardWrapper,
	__IconWrapper,
	__SettingCardTitle,
	__SettingCardDesc,
};
