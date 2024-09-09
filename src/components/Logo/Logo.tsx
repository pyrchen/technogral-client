import localFont from 'next/font/local';

import { FC } from 'react';

import { LogoParts } from '@/components/Logo/Logo.styled';
import { ILogoComponentsProps } from '@/components/Logo/Logo.types';
import { TextTags } from '@/constants/text.contants';
import { LogoIcon } from '@/icons';
import { TypoText } from '@/uikit';

const betterVcs = localFont({
	src: '../../fonts/BetterVCR/BetterVCR.woff2',
	display: 'swap',
});

const Logo: FC<ILogoComponentsProps> = (props) => {
	return (
		<LogoParts.__LogoWrapper
			className={betterVcs.className}
			{...props}
		>
			<LogoIcon />
			<TypoText
				fontSize={16}
				as={TextTags.H3}
				transform={'uppercase'}
			>
				ТЕХНОГРАЛЬ
			</TypoText>
		</LogoParts.__LogoWrapper>
	);
};

export default Logo;
