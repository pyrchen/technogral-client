import Link from 'next/link';

import { FC } from 'react';

import { SettingCard } from '@/components';

import { cardsData } from './SettingCardList.constants';
import { SettingCardListParts } from './SettingCardList.styled';

const SettingCardList: FC = () => {
	return (
		<SettingCardListParts.__SettingCardList>
			{cardsData.map(({ title, description, Icon, href }, i) => {
				return (
					<Link
						href={href}
						key={i}
					>
						<SettingCard
							title={title}
							desc={description}
							icon={<Icon />}
						></SettingCard>
					</Link>
				);
			})}
		</SettingCardListParts.__SettingCardList>
	);
};

export default SettingCardList;
