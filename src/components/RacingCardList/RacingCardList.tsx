import { FC } from 'react';

import { RacingCard } from '@/components';

import { cardsData } from './RacingCardList.constants';
import { RacingCardListParts } from './RacingCardList.styled';

const RacingCardList: FC = () => {
	return (
		<RacingCardListParts.__RacingPageContainer>
			<RacingCardListParts.__RacingCardList>
				{cardsData.map(({ title, desc, subdesc, price }, i) => {
					return (
						<RacingCard
							key={i}
							title={title}
							desc={desc}
							subdesc={subdesc}
							price={price}
						></RacingCard>
					);
				})}
			</RacingCardListParts.__RacingCardList>
		</RacingCardListParts.__RacingPageContainer>
	);
};

export default RacingCardList;
