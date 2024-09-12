import { FC } from 'react';

import { SettingCard } from '@/components';

import { cardsData } from './SettingCardList.constants';
import { SettingCardListParts } from './SettingCardList.styled';

const SettingCardList: FC = () => {
	return (
		<SettingCardListParts.__SettingCardList>
			{cardsData.map(({ title, description, Icon }, i) => {
				return (
					<SettingCard
						key={i}
						title={title}
						desc={description}
						icon={<Icon />}
					></SettingCard>
				);
			})}
		</SettingCardListParts.__SettingCardList>
	);
};

export default SettingCardList;
