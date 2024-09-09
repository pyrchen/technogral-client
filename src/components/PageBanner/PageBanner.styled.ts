import styled from 'styled-components';

const __BannerWrapper = styled.div`
	display: grid;
	grid-template-columns: 577px 560px;
	grid-template-rows: 263px;
	gap: 53px;
`;

const __BannerImageWrapper = styled.div`
	position: relative;
	border-radius: 15px;
	overflow: hidden;
`;

const __BannerImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const __BannerInfoWrapper = styled.div`
	padding: 15px 0 15px 0;
`;

const __BannerInfoDescription = styled.div`
	margin: 15px 0 20px 0;
`;

export const BannerParts = {
	__BannerWrapper,
	__BannerImageWrapper,
	__BannerImage,
	__BannerInfoWrapper,
	__BannerInfoDescription,
};
