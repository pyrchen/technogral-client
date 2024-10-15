'use client';

import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

import { FC, useEffect, useState } from 'react';

import { ContentContainer, Logo, MiniProfile } from '@/components';
import { buttonLinks, links } from '@/components/AppHeader/AppHeader.constants';
import { __AppHeader, __ButtonsLinks, __Grid, __Links } from '@/components/AppHeader/AppHeader.styled';
import { TextTags, TextWeights } from '@/constants/text.contants';
import { useIsAuthenticated } from '@/store/auth';
import { TNullable } from '@/types/base';
import { Button, TextField, TypoText } from '@/uikit';
import { createFlexStyles } from '@/utils/styled.utils';

const __LinkStyled = styled.div`
	${createFlexStyles('inline-flex')}

	& > a[href] {
		${createFlexStyles('inline-flex')}
	}
`;

const Links = () => {
	const theme = useTheme();

	return (
		<__Links>
			{links.map(({ name, link }) => {
				return (
					<Link
						key={name}
						href={link}
					>
						<TypoText
							color={theme.text.TEXT_2}
							as={TextTags.SPAN}
							fontSize={16}
							weight={TextWeights.MEDIUM}
						>
							{name}
						</TypoText>
					</Link>
				);
			})}
		</__Links>
	);
};

const ButtonLinks = () => (
	<__ButtonsLinks>
		{buttonLinks.map(({ name, link, variant }) => {
			return (
				<Link
					key={name}
					href={link}
				>
					<Button variant={variant}>{name}</Button>
				</Link>
			);
		})}
	</__ButtonsLinks>
);

const AppHeader: FC = () => {
	const isAuthed = useIsAuthenticated();
	const [isScrolled, setIsScrolled] = useState<TNullable<boolean>>(null);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);

		setIsScrolled(window.scrollY > 0);

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<__AppHeader $isScrolled={isScrolled}>
			<ContentContainer>
				<__Grid>
					<__LinkStyled>
						<Link href={'/'}>
							<Logo />
						</Link>
					</__LinkStyled>
					<TextField placeholder={'Search'} />
					<Links />
					{isAuthed ? <MiniProfile /> : <ButtonLinks />}
				</__Grid>
			</ContentContainer>
		</__AppHeader>
	);
};

export default AppHeader;
