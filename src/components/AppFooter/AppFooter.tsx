import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { FC } from 'react';

import { ContentContainer, Logo } from '@/components';
import { contactData, links1, links2, socialData } from '@/components/AppFooter/AppFooter.constants';
import { InfoWithIcon } from '@/components/AppFooter/InfoWithIcon';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { EveryWithDollarSign } from '@/types/styled.types';
import { Button, Divider, TypoText } from '@/uikit';
import { toPx } from '@/utils/formatting.utils';

interface IStyledBlocksWrapperProps {
	padding: string;
	columns: number;
}

const __AppFooter = styled.footer`
	padding: 68px 0 60px;
	background-color: ${({ theme }) => theme.MAIN.MAIN_5};
`;

const __BlocksWrapper = styled.div<EveryWithDollarSign<IStyledBlocksWrapperProps>>`
	display: grid;
	grid-template-columns: ${(props) => `repeat(${props.$columns}, 1fr)`};
	grid-template-rows: 1fr;
	gap: 31px;
	padding: ${(props) => props.$padding};
`;

const __FooterLinks = styled.div<EveryWithDollarSign<{ gap?: number }>>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${({ $gap }) => toPx($gap || 15)};
`;

const __AdsBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;
`;

const __SocialsBlock = styled(__AdsBlock)`
	& > [data-socials] {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
	}
`;

const __CompanyData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FooterLinks = () => {
	const theme = useTheme();

	const askingLinks = (
		<__FooterLinks>
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
		</__FooterLinks>
	);

	const literalContactData = (
		<__FooterLinks $gap={18}>
			{contactData.map(({ Icon, text }) => {
				return (
					<InfoWithIcon
						key={text}
						icon={<Icon />}
					>
						<TypoText weight={TextWeights.MEDIUM}>{text}</TypoText>
					</InfoWithIcon>
				);
			})}
		</__FooterLinks>
	);

	const socialsButtons = (
		<__SocialsBlock>
			<TypoText
				as={TextTags.H4}
				fontSize={14}
				color={theme.text.TEXT_4}
			>
				Социальные сети
			</TypoText>
			<div data-socials=''>
				{socialData.map(({ Icon, type, url, hint }) => (
					<Link
						key={type}
						href={url}
						title={hint}
					>
						<Icon />
					</Link>
				))}
			</div>
		</__SocialsBlock>
	);

	const rulesAndWishesLinks = (
		<__FooterLinks>
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
		</__FooterLinks>
	);

	const orderBoost = (
		<Button
			size='large'
			variant='filled'
		>
			Заказать разгон
		</Button>
	);

	return (
		<__BlocksWrapper
			$padding={'65px 0 25px'}
			$columns={2}
		>
			<__BlocksWrapper
				$padding={'0'}
				$columns={2}
			>
				{askingLinks}
				{literalContactData}
			</__BlocksWrapper>
			<__BlocksWrapper
				$padding={'0'}
				$columns={3}
			>
				{socialsButtons}
				{rulesAndWishesLinks}
				{orderBoost}
			</__BlocksWrapper>
		</__BlocksWrapper>
	);
};

const AdditionalFooterData = () => {
	const theme = useTheme();

	const textLinks = (
		<>
			<TypoText
				fontSize={14}
				color={theme.text.TEXT_4}
				decoration={'underline'}
			>
				<Link href={''}>Политика конфиденциальности данных</Link>
			</TypoText>
			<TypoText
				fontSize={14}
				color={theme.text.TEXT_4}
				decoration={'underline'}
			>
				<Link href={''}>Создание сайта</Link>
			</TypoText>
		</>
	);

	const adsQuestions = (
		<__AdsBlock>
			<TypoText
				fontSize={14}
				as={TextTags.H5}
				color={theme.text.TEXT_4}
			>
				По вопросам рекламы
			</TypoText>
			<__FooterLinks $gap={10}>
				{contactData.map(({ Icon, text }) => {
					return (
						<InfoWithIcon
							key={text}
							icon={<Icon />}
						>
							<TypoText weight={TextWeights.MEDIUM}>{text}</TypoText>
						</InfoWithIcon>
					);
				})}
			</__FooterLinks>
		</__AdsBlock>
	);

	return (
		<__BlocksWrapper
			$columns={2}
			$padding={'40px 0 43px'}
		>
			<__BlocksWrapper
				$columns={2}
				$padding={'0'}
			>
				{textLinks}
			</__BlocksWrapper>
			<__BlocksWrapper
				$columns={1}
				$padding={'0'}
			>
				{adsQuestions}
			</__BlocksWrapper>
		</__BlocksWrapper>
	);
};

const CompanyData = () => {
	const theme = useTheme();

	return (
		<__CompanyData>
			<TypoText
				as={TextTags.H4}
				fontSize={14}
				weight={TextWeights.MEDIUM}
				color={theme.text.TEXT_4}
			>
				© 2000-2024 Разгон ПК «ТехноГрааль»
			</TypoText>
			<TypoText
				as={TextTags.H4}
				fontSize={20}
				weight={TextWeights.MEDIUM}
				color={theme.text.TEXT_4}
			>
				16+
			</TypoText>
		</__CompanyData>
	);
};

const AppFooter: FC = () => {
	const theme = useTheme();

	return (
		<__AppFooter>
			<ContentContainer>
				<Logo />
				<FooterLinks />
				<Divider />
				<AdditionalFooterData />
				<CompanyData />
			</ContentContainer>
		</__AppFooter>
	);
};

export default AppFooter;
