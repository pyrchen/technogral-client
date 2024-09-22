'use client';

import { createElement, useState } from 'react';

import { SocialSuggestionsPopoverParts as Parts } from '@/components/SocialSuggestionsPopover/SocialSuggestionsPopover.styled';
import { ArrowBottomIcon, YoutubeIcon } from '@/icons';

const data = [
	{ type: 'tg', label: 'Telegram-канал', icon: YoutubeIcon },
	{ type: 'vk', label: 'Группа ВКонтакте', icon: YoutubeIcon },
	{ type: 'youtube', label: 'YouTube-канал', icon: YoutubeIcon },
];

const SocialSuggestionsPopover = () => {
	const [isOpened, setIsOpened] = useState(false);

	const toggle = () => setIsOpened((prev) => !prev);

	return (
		<Parts.__Wrapper $isOpened={isOpened}>
			<Parts.__ArrowBlock
				$isOpened={isOpened}
				onClick={toggle}
			>
				<ArrowBottomIcon />
			</Parts.__ArrowBlock>
			<Parts.__SocialsBlock>
				{data.map(({ label, icon, type }) => (
					<Parts.__SocialItem key={type}>
						<Parts.__SocialText>{label}</Parts.__SocialText>
						{createElement(icon)}
					</Parts.__SocialItem>
				))}
			</Parts.__SocialsBlock>
		</Parts.__Wrapper>
	);
};

export default SocialSuggestionsPopover;
