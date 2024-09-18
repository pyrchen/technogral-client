import styled from 'styled-components';

const __SideButtonsWrapper = styled.div`
	position: fixed;
	top: 50%;
	right: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	transform: translate(0, -50%);
`;

const __SideButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background-color: #769cff;
	cursor: pointer;
`;

export const SideButtonsParts = {
	__SideButton,
	__SideButtonsWrapper,
};
