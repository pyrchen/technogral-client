'use client';

import styled from 'styled-components';

import { ArticlesList, ContentContainer, PageBanner, SideButtons } from '@/components/index';
import { TextWeights } from '@/constants/text.contants';
import { AllFiltersIcon } from '@/icons/index';
import { Button, TypoText } from '@/uikit/index';

const __Banner = styled.div`
	margin-bottom: 40px;
`;

const __Filters = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	margin-top: 15px;
	margin-bottom: 30px;
`;

const __ArticlesTypes = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	gap: 12px;
	margin-bottom: 30px;
`;

export default function Home() {
	return (
		<ContentContainer>
			<__Banner>
				<PageBanner />
			</__Banner>
			<TypoText
				fontSize={28}
				weight={TextWeights.SEMI_BOLD}
			>
				Новости
			</TypoText>
			<__Filters>
				<AllFiltersIcon />
				<TypoText
					fontSize={14}
					weight={TextWeights.MEDIUM}
					color={'#373737'}
				>
					Все фильтры
				</TypoText>
			</__Filters>
			<__ArticlesTypes>
				{Array(7)
					.fill('IT-технологии')
					.map((el) => {
						return (
							<Button
								key={el + Date.now() + Math.random().toString()}
								variant={'outlined'}
								size={'small'}
							>
								<TypoText
									fontSize={14}
									weight={TextWeights.MEDIUM}
								>
									{el}
								</TypoText>
							</Button>
						);
					})}
			</__ArticlesTypes>
			<ArticlesList />
			<SideButtons data-side-buttons />
		</ContentContainer>
	);
}
