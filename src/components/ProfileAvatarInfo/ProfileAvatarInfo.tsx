import { UserRole } from '@/components';
import { ProfileAvatarInfoParts } from '@/components/ProfileAvatarInfo/ProfileAvatarInfo.styled';
import { TextWeights } from '@/constants/text.contants';
import { Avatar, TypoText } from '@/uikit';

const ProfileAvatarInfo = () => {
	return (
		<ProfileAvatarInfoParts.__Wrapper>
			<Avatar
				width={'100%'}
				url={
					'https://imgs.search.brave.com/JytNWyDzESWy0syW42PyQUhEjPAIRGGyUXi-kbh5kCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1hdmF0YXIt/Y2FydG9vbi1jaGFy/YWN0ZXJfMTEzMjU1/LTkzMjgzLmpwZz9z/aXplPTYyNiZleHQ9/anBn'
				}
			/>
			<ProfileAvatarInfoParts.__InfoWrapper>
				<TypoText
					fontSize={25}
					weight={TextWeights.MEDIUM}
					color={'#0A0A0A'}
				>
					Олег Вещий
				</TypoText>
				<UserRole />
				{/*<TypoText*/}
				{/*	fontSize={16}*/}
				{/*	weight={TextWeights.MEDIUM}*/}
				{/*	color={'#0066FF'}*/}
				{/*>*/}
				{/*	Олег Вещий*/}
				{/*</TypoText>*/}
			</ProfileAvatarInfoParts.__InfoWrapper>
		</ProfileAvatarInfoParts.__Wrapper>
	);
};

export default ProfileAvatarInfo;
