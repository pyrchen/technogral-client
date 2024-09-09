import { BannerParts } from '@/components/PageBanner/PageBanner.styled';
import { TextWeights } from '@/constants/text.contants';
import { Button, TypoText } from '@/uikit';

const PageBanner = () => {
	return (
		<BannerParts.__BannerWrapper>
			<BannerParts.__BannerImageWrapper>
				<BannerParts.__BannerImage src='https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg' />
			</BannerParts.__BannerImageWrapper>
			<BannerParts.__BannerInfoWrapper>
				<TypoText
					fontSize={36}
					weight={TextWeights.MEDIUM}
					lineHeight={46.8}
				>
					Реалистичный женский{' '}
					<TypoText
						color={'#0066FF'}
						fontSize={36}
					>
						голос
					</TypoText>{' '}
					в реальном времени
				</TypoText>
				<BannerParts.__BannerInfoDescription>
					<TypoText
						fontSize={16}
						weight={TextWeights.MEDIUM}
						lineHeight={22.4}
						color={'#373737'}
					>
						Для начала нам потребуется средняя-мощная видеокарта, на слабой видеокарте будет большая задержка
					</TypoText>
				</BannerParts.__BannerInfoDescription>
				<Button
					size='large'
					variant='filled'
				>
					Читать статью
				</Button>
			</BannerParts.__BannerInfoWrapper>
		</BannerParts.__BannerWrapper>
	);
};

export default PageBanner;
