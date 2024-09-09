'use client';

import styled from 'styled-components';

import { FC, PropsWithChildren } from 'react';

const __ContentContainer = styled.div`
	margin: 0 auto;
	max-width: 1240px;
	padding: 0 10px;
	box-sizing: content-box;
`;

const ContentContainer: FC<PropsWithChildren> = ({ children }) => {
	return <__ContentContainer>{children}</__ContentContainer>;
};

export default ContentContainer;
