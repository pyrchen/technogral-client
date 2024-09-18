import { ArticlesListParts } from '@/components/ArticlesList/ArticlesList.styled';
import { ArticleCard } from '@/components/index';

const ArticlesList = () => {
	return (
		<ArticlesListParts.__ArticlesList>
			{Array.from({ length: 20 }).map((_, i) => (
				<ArticleCard key={i} />
			))}
		</ArticlesListParts.__ArticlesList>
	);
};

export default ArticlesList;
