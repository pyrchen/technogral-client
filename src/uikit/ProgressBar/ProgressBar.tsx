import { FC } from 'react';

import { TextTags } from '@/constants/text.contants';
import { __ProgressBarParts } from '@/uikit/ProgressBar/ProgressBar.styled';

import TypoText from '../TypoText/TypoText';

import { IProgressBarContent, IProgressBarProps } from './ProgressBar.types';

const ProgressBar: FC<IProgressBarContent> = ({ width = '190px', color = '#E3E3E3', progress, title, ...props }) => {
	return (
		<div {...props}>
			<TypoText
				as={TextTags.H3}
				fontSize={14}
				lineHeight={20}
			>
				{title}
			</TypoText>
			<__ProgressBarParts.__ProgressBarWrapper $width={width}>
				<__ProgressBarParts.__ProgressIndicator
					$progress={progress}
					$color={color}
				/>
			</__ProgressBarParts.__ProgressBarWrapper>
		</div>
	);
};

export default ProgressBar;
