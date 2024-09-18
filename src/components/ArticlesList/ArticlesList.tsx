import { ArticleCard } from '@/components';
import { ArticlesListParts } from '@/components/ArticlesList/ArticlesList.styled';

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
