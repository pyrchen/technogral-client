import { AvatarLoaderBlockParts } from '@/components/AvatarLoaderBlock/AvatarLoaderBlock.styled';
import { TextWeights } from '@/constants/text.contants';
import { LoadPictureIcon } from '@/icons';
import { Button, TypoText } from '@/uikit';

const AvatarLoaderBlock = () => {
	return (
		<AvatarLoaderBlockParts.__Wrapper>
			<div>
				<Button
					variant='filled'
					leftAddon={<LoadPictureIcon />}
				>
					<TypoText
						fontSize={18}
						weight={TextWeights.MEDIUM}
						color={'#ffffff'}
					>
						Загрузить
					</TypoText>
				</Button>
			</div>
			<TypoText
				fontSize={14}
				color='#0A0A0A'
			>
				Обновите фотографию профиля
				<br />
				Рекомендуется загружать аватар шириной 200px.
			</TypoText>
		</AvatarLoaderBlockParts.__Wrapper>
	);
};

export default AvatarLoaderBlock;
