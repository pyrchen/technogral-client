import styled from 'styled-components';

const __Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: calc(100% + 20px);
	left: 0;
	width: 305px;
	background-color: white;
	transform: translateX(-40%);
	border-radius: 10px;
	box-shadow:
		0px 6.92px 65.87px 0px #6868680b,
		0px 31px 162px 0px #68686812;
	overflow: hidden;
`;

const __MenuItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	width: 100%;
	transition: 0.2s all;

	&:hover {
		background-color: #e3e3e3;
	}

	span {
		font-size: 16px;
		font-weight: 500;
	}

	&:nth-of-type(1) {
		border-bottom: 1px solid #00000014;
	}

	&:last-of-type {
		border-top: 1px solid #00000014;
	}
`;

const __IconWrapper = styled.div`
	width: 19px;
	height: 19px;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		transform: scale(0.8);
	}
`;

export const DropdownMenuParts = {
	__Wrapper,
	__MenuItem,
	__IconWrapper,
};
