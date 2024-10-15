import { useState } from 'react';

import { DropdownMenu } from '@/components';
import { MiniProfileParts } from '@/components/MiniProfile/MiniProfile.styled';
import { NotificationIcon } from '@/icons';
import { FrameIcon } from '@/uikit';

import Avatar from '../../uikit/Avatar/Avatar';

const MiniProfile = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<MiniProfileParts.__Wrapper>
			<MiniProfileParts.__IconBlock>
				<FrameIcon
					width={26}
					height={26}
				>
					<NotificationIcon />
				</FrameIcon>
			</MiniProfileParts.__IconBlock>
			<MiniProfileParts.__MiniBlock style={{ position: 'relative', cursor: 'pointer' }}>
				<Avatar
					width={'100%'}
					url={
						'https://imgs.search.brave.com/JytNWyDzESWy0syW42PyQUhEjPAIRGGyUXi-kbh5kCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1hdmF0YXIt/Y2FydG9vbi1jaGFy/YWN0ZXJfMTEzMjU1/LTkzMjgzLmpwZz9z/aXplPTYyNiZleHQ9/anBn'
					}
					onClick={() => setIsMenuOpened(true)}
				/>
				<DropdownMenu
					isOpened={isMenuOpened}
					onChange={(value) => setIsMenuOpened(value)}
				/>
			</MiniProfileParts.__MiniBlock>
			{/*<MiniProfileParts.__MiniBlock>*/}
			{/*	<MiniProfileParts.__ThemeBlock>*/}
			{/*		<MoonIcon />*/}
			{/*	</MiniProfileParts.__ThemeBlock>*/}
			{/*</MiniProfileParts.__MiniBlock>*/}
		</MiniProfileParts.__Wrapper>
	);
};

export default MiniProfile;
