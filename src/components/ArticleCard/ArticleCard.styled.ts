import styled from 'styled-components';

const __ArticleCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	gap: 20px;
`;

const __ArticleImageWrapper = styled.div`
	position: relative;
	width: 400px;
	height: 238px;
	border-radius: 10px;
	overflow: hidden;
`;

const __ArticleImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const __ArticleInfoWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 15px;
`;

const __ArticleAvatarBlock = styled.div`
	width: 45px;
	display: flex;
	align-items: flex-start;
`;

const __ArticleInfo = styled.div`
	overflow: hidden;
`;

const __InfoAuthorCircle = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: #769cff;
`;

const __InfoAuthorBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 7px;
	margin-top: 10px;
	margin-bottom: 5px;
`;

const __InfoStatBlock = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 25px;
`;

const __InfoLikesDislikes = styled.div`
	display: flex;
	gap: 15px;
`;

export const ArticleParts = {
	__ArticleCardWrapper,
	__ArticleInfoWrapper,
	__ArticleImageWrapper,
	__ArticleImage,
	__ArticleAvatarBlock,
	__InfoAuthorCircle,
	__InfoAuthorBlock,
	__InfoStatBlock,
	__ArticleInfo,
	__InfoLikesDislikes,
};
