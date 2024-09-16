import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FC } from 'react';

import { Tab } from '@/components';
import { TabsParts } from '@/components/Tabs/Tabs.styled';
import { ITabsComponentProps } from '@/components/Tabs/Tabs.types';

const Tabs: FC<ITabsComponentProps> = ({ tabs = [], ...props }) => {
	const currentPath = usePathname();

	return (
		<TabsParts.__TabsWrapper {...props}>
			{tabs.map(({ title, path }) => (
				<Link
					href={path}
					key={path}
				>
					<Tab
						tabName={title}
						active={path === currentPath}
					/>
				</Link>
			))}
		</TabsParts.__TabsWrapper>
	);
};

export default Tabs;
