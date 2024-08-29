import { TextTags } from '@/constants/text.contants';
import { Button, TypoText } from '@/uikit';

export default function Home() {
	return (
		<main>
			<Button size={'small'}>Заказать разгон</Button>
			<br />
			<br />
			<Button size={'medium'}>Заказать разгон</Button>
			<br />
			<br />
			<Button size={'large'}>Заказать разгон</Button>
			<br />
			<br />
			<TypoText as={TextTags.H1} color='red' fontSize={24}>
				Hello World
			</TypoText>
			<TypoText as={TextTags.H2} color='green' fontSize={20}>
				Hello World
			</TypoText>
			<TypoText as={TextTags.H3} color='blue' fontSize={16}>
				Hello World
			</TypoText>
		</main>
	);
}
