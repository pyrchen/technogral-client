'use client';

import styled from 'styled-components';

import { ProfileAvatarInfo, UserStatistics } from '@/components';
import { AnySection } from '@/uikit';

const __FirstBlock = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 70px;
`;

const __PageWrapper = styled.div`
	padding-top: 50px;
	padding-bottom: 80px;
`;

const __FirstBlockOffset = styled.div`
	margin-top: 42px;
`;

export default function ProfilePage() {
	return (
		<__PageWrapper>
			<AnySection margin={'0 0 50px 0'}>
				<__FirstBlock>
					<ProfileAvatarInfo />
					<__FirstBlockOffset>
						<UserStatistics />
					</__FirstBlockOffset>
					{/*<__FirstBlockOffset>*/}
					{/*	<AvatarLoaderBlock />*/}
					{/*</__FirstBlockOffset>*/}
				</__FirstBlock>
			</AnySection>
		</__PageWrapper>
	);
}
