import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { FC } from 'react';

import { ContentContainer } from '@/components';
import { links1, links2 } from '@/components/AppFooter/AppFooter.styled';
import { TextTags } from '@/constants/text.contants';
import { TStyledPropsPicker } from '@/types/styled.types';
import { TypoText } from '@/uikit';

interface IStyledBlocksWrapperProps {
	padding: string;
}

const bgFooterPicker: TStyledPropsPicker = ({ theme }) => theme.MAIN.MAIN_5;

const StyledAppFooter = styled.footer`
	padding: 68px 0 60px;
	background-color: ${bgFooterPicker};
`;

const StyledBlocksWrapper = styled.div<IStyledBlocksWrapperProps>`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 31px;
	padding: ${(props) => props.padding};
`;

const StyledFooterLinks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 15px;
`;

const AppFooter: FC = () => {
	const theme = useTheme();

	return (
		<StyledAppFooter>
			<ContentContainer>
				<div>Logo</div>
				<StyledBlocksWrapper padding={'65px 0 25px'}>
					<StyledBlocksWrapper padding={'0'}>
						<StyledFooterLinks>
							{links1.map(({ name, link }) => {
								return (
									<Link
										key={name}
										href={link}
									>
										<TypoText
											as={TextTags.H5}
											fontSize={16}
											color={theme.text.TEXT_2}
										>
											{name}
										</TypoText>
									</Link>
								);
							})}
						</StyledFooterLinks>
						<StyledFooterLinks>
							{links1.map(({ name, link }) => {
								return (
									<Link
										key={name}
										href={link}
									>
										<TypoText
											as={TextTags.H5}
											fontSize={16}
											color={theme.text.TEXT_2}
										>
											{name}
										</TypoText>
									</Link>
								);
							})}
						</StyledFooterLinks>
					</StyledBlocksWrapper>
					<StyledBlocksWrapper padding={'0'}>
						<StyledFooterLinks>
							{links2.map(({ name, link }) => {
								return (
									<Link
										key={name}
										href={link}
									>
										<TypoText
											as={TextTags.H5}
											fontSize={16}
											color={theme.text.TEXT_2}
										>
											{name}
										</TypoText>
									</Link>
								);
							})}
						</StyledFooterLinks>
					</StyledBlocksWrapper>
				</StyledBlocksWrapper>
				<div></div>
			</ContentContainer>
		</StyledAppFooter>
	);
};

export default AppFooter;
