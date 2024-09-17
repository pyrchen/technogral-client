import { FC } from 'react';

import { TextTags } from '@/constants/text.contants';
import { __ProgressBarParts } from '@/uikit/ProgressBar/ProgressBar.styled';

import TypoText from '../TypoText/TypoText';

import { IProgressBarProps } from './ProgressBar.types';

const ProgressBar: FC<IProgressBarProps> = ({ $width = '190px', color = '#E3E3E3', progress = 0, title, ...props }) => {
	return (
		<div>
			<TypoText
				as={TextTags.H3}
				fontSize={14}
				lineHeight={20}
			>
				{title}
			</TypoText>
			<__ProgressBarParts.__ProgressBarWrapper
				$width={$width}
				{...props}
			>
				<__ProgressBarParts.__ProgressIndicator
					progress={progress}
					color={color}
				/>
			</__ProgressBarParts.__ProgressBarWrapper>
		</div>
	);
};

export default ProgressBar;
