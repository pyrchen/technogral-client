import { Tab } from '@/components';
import { TabsParts } from '@/components/Tabs/Tabs.styled';

const Tabs = () => {
	return (
		<TabsParts.__TabsWrapper>
			{Array(5)
				.fill('hello world')
				.map((_) => {
					return (
						<Tab
							tabName={_}
							active={false}
						/>
					);
				})}
		</TabsParts.__TabsWrapper>
	);
};

export default Tabs;
