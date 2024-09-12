import styled from 'styled-components';

const __Card = styled.div`
	width: 100%;
	background-color: #fafafa;
	padding: 30px 30px 50px 30px;
	border-radius: 10px;
	position: relative;
	display: flex;
	gap: 30px;
`;

const __CardImage = styled.img`
	border-radius: 10px;
`;

const __CardTextWrapper = styled.div`
	margin-top: 10px;
`;

const __CardFlexContainer = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
`;

const __CardCheckBox = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 27px;
	height: 27px;
	border-radius: 100px;
	border: 1px solid #769cff;
	background-color: #fff;
	cursor: pointer;
`;

const __CardCircle = styled.div`
	width: 5px;
	height: 5px;
	background-color: #0447ab;
	border-radius: 50%;
`;

const __CardTitle = styled.div``;
const __CardPrice = styled.div``;
const __CardDesc = styled.div`
	margin-top: 10px;
	max-width: 878px;
	line-height: 22.4px;
`;

const __CardSubDesc = styled.div`
	max-width: 878px;
	line-height: 22.4px;
`;

const __CardButton = styled.div`
	display: inline-block;
	margin-top: 10px;
	border-bottom: 1px solid #0447ab;
	padding-bottom: 2px;
	cursor: pointer;
`;

export const RacingParts = {
	__CardCheckBox,
	__CardTitle,
	__CardPrice,
	__CardDesc,
	__CardTextWrapper,
	__Card,
	__CardCircle,
	__CardButton,
	__CardSubDesc,
	__CardFlexContainer,
	__CardImage,
};
