import { createElement, FC } from 'react';

import { UserStatsData } from '@/components/UserStatistics/UserStatistics.constants';
import { UserStatisticsParts } from '@/components/UserStatistics/UserStatistics.styled';
import { TAny } from '@/types/base';

const UserStatistics: FC<TAny> = () => {
	return (
		<UserStatisticsParts.__Wrapper>
			{UserStatsData.map(({ value, title, type, icon }) => (
				<UserStatisticsParts.__StatBlock key={type}>
					<UserStatisticsParts.__IconWrapper
						$fill={type === 'dislikes' ? '#0A0A0A' : ''}
						$rotate={type === 'dislikes' ? '180deg' : ''}
					>
						{createElement(icon)}
					</UserStatisticsParts.__IconWrapper>
					<UserStatisticsParts.__StatText>
						{value}
						{title ? ` ${title}` : ''}
					</UserStatisticsParts.__StatText>
				</UserStatisticsParts.__StatBlock>
			))}
		</UserStatisticsParts.__Wrapper>
	);
};

export default UserStatistics;
