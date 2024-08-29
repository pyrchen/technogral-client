'use client';

import styled from 'styled-components';

import { FC, PropsWithChildren } from 'react';

const StyledContentContainer = styled.div`
	margin: 0 auto;
	max-width: 1240px;
`;

const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
	return <StyledContentContainer>{children}</StyledContentContainer>;
};

export default ContentContainer;
