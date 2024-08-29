'use client';

import styled from 'styled-components';

import { FC } from 'react';

import { ContentContainer } from '@/components';

const StyledHeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AppHeader: FC = () => {
	return <ContentContainer>Технограль</ContentContainer>;
};

export default AppHeader;
