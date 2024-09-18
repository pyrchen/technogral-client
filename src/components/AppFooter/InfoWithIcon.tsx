import styled from 'styled-components';

import { PropsWithChildren, ReactNode } from 'react';

const StyledInfoWithIcon = styled.div`
	display: grid;
	grid-template-columns: 15px auto;
	align-items: center;
	justify-content: center;
	gap: 6px;
`;

const InfoWithIcon = ({ icon, children }: PropsWithChildren<{ icon: ReactNode }>) => {
	return (
		<StyledInfoWithIcon>
			<div>{icon}</div>
			<div>{children}</div>
		</StyledInfoWithIcon>
	);
};

export { InfoWithIcon };
