import { FC } from 'react';

import Accordion from '../Accordion/Accordion';

import { faqItems } from './AccordionList.constants';
import { AccordionListParts } from './AccordionList.styled';

const AccordionList: FC = () => {
	return (
		<AccordionListParts.__AccordionList>
			{faqItems.map(({ answer, question }, i) => {
				return (
					<Accordion
						key={i}
						answer={answer}
						question={question}
					></Accordion>
				);
			})}
		</AccordionListParts.__AccordionList>
	);
};

export default AccordionList;
