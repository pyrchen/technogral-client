import { TextWeights } from '@/constants/text.contants';
import { TypoText } from '@/uikit';
import Avatar from '@/uikit/Avatar/Avatar';

import { ArticleParts } from './ArticleCard.styled';

const ArticleCard = () => {
	const articleTitle = (
		<TypoText
			weight={TextWeights.MEDIUM}
			fontSize={18}
			lineHeight={23.4}
		>
			RTX 4070 станет более доступной к покупке 7 августа
		</TypoText>
	);

	const authorBlock = (
		<ArticleParts.__InfoAuthorBlock>
			<ArticleParts.__InfoAuthorCircle />
			<TypoText
				weight={TextWeights.MEDIUM}
				fontSize={14}
				color={'#0A0A0A'}
				lineHeight={18.2}
			>
				Олег Вещий
			</TypoText>
		</ArticleParts.__InfoAuthorBlock>
	);

	const statsBlock = (
		<ArticleParts.__InfoStatBlock>
			<TypoText
				color={'#898989'}
				weight={TextWeights.MEDIUM}
				fontSize={14}
				lineHeight={18.2}
			>
				2 часа назад
			</TypoText>
			<ArticleParts.__InfoLikesDislikes>
				<TypoText
					weight={TextWeights.MEDIUM}
					fontSize={14}
					lineHeight={18.2}
				>
					1991
				</TypoText>
				<TypoText
					weight={TextWeights.MEDIUM}
					fontSize={14}
					lineHeight={18.2}
				>
					20054
				</TypoText>
			</ArticleParts.__InfoLikesDislikes>
		</ArticleParts.__InfoStatBlock>
	);

	return (
		<ArticleParts.__ArticleCardWrapper>
			<ArticleParts.__ArticleImageWrapper>
				<ArticleParts.__ArticleImage
					src={
						'https://imgs.search.brave.com/2A_UiwmjCasqucSKnN-Azo_7Lq7nrIcBr90F6enPA2I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbnlp/bWFnZS5ubC9jZG4v/c2hvcC9maWxlcy9U/QkNfMF8xMDI0eDEw/MjQuanBnP3Y9MTcy/NDI0Mzc5Mg'
					}
				/>
			</ArticleParts.__ArticleImageWrapper>
			<ArticleParts.__ArticleInfoWrapper>
				<ArticleParts.__ArticleAvatarBlock>
					<Avatar
						width={45}
						url={
							'https://imgs.search.brave.com/JytNWyDzESWy0syW42PyQUhEjPAIRGGyUXi-kbh5kCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1hdmF0YXIt/Y2FydG9vbi1jaGFy/YWN0ZXJfMTEzMjU1/LTkzMjgzLmpwZz9z/aXplPTYyNiZleHQ9/anBn'
						}
					/>
				</ArticleParts.__ArticleAvatarBlock>
				<ArticleParts.__ArticleInfo>
					{articleTitle}
					{authorBlock}
					{statsBlock}
				</ArticleParts.__ArticleInfo>
			</ArticleParts.__ArticleInfoWrapper>
		</ArticleParts.__ArticleCardWrapper>
	);
};

export default ArticleCard;
