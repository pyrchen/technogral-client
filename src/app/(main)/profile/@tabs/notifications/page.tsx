'use client';

import styled from 'styled-components';

import { MessageIcon, NotificationPageIcon, VkIcon } from '@/icons';
import { Button, IconButton, RadioFieldsGroup } from '@/uikit';

export default function SecurityPage() {
	return (
		<__SecurityPageContainer>
			<VkIcon />
			<__VkName>ВКонтакте (Андрей Полосатиков)</__VkName>
			<Button
				style={{ width: 360 }}
				variant='filled'
				size='large'
			>
				Отключить уведомления ВКонтакте
			</Button>
			<__SecurityPagedDesc>Вы будете получать уведомления в VK, если они выбраны ниже</__SecurityPagedDesc>
			<Button
				style={{ width: 400 }}
				size='large'
			>
				Перестать следить за всеми статьями
			</Button>
			<__SecurityPagedDesc>Отпишитесь от всех статей, на которые Вы были подписаны</__SecurityPagedDesc>
			<__RadioBlockContainer>
				<__MiniSection>
					<IconButton>
						<NotificationPageIcon />
					</IconButton>
					<RadioFieldsGroup
						name={'make-notifications'}
						options={[
							{ label: 'Ответил в отслеживаемой мною статье', value: 0 },
							{ label: 'Упомянул мою статью в сообщении', value: 1 },
						]}
						onChange={() => {}}
						groupTitle={'Оповещать, если кто-то'}
					/>
				</__MiniSection>
				<__MiniSection>
					<IconButton>
						<MessageIcon />
					</IconButton>
					<RadioFieldsGroup
						name={'do-send'}
						options={[
							{ label: 'Сотрудник категории открыл новый тикет с Вашим участием', value: 0 },
							{ label: 'Вы открыли тикет', value: 1 },
							{ label: 'Ответил на Ваш тикет', value: 2 },
							{ label: 'Упомянул Вас в сообщении', value: 3 },
						]}
						onChange={() => {}}
						groupTitle={'Служба поддержки: оповещать если'}
					/>
				</__MiniSection>
			</__RadioBlockContainer>
		</__SecurityPageContainer>
	);
}

const __SecurityPageContainer = styled.div`
	margin: 60px auto 50px;
`;

const __MiniSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const __RadioContainer = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 15px;
	flex-direction: column;
`;
const __SecurityPageTitle = styled.h2`
	font-size: 18px;
	margin-top: 20px;
	color: #0a0a0a;
	font-weight: 500;
	line-height: 25px;
`;

const __RadioBlockContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin-top: 50px;
`;

const __VkName = styled(__SecurityPageTitle)`
	margin-top: 30px;
	margin-bottom: 20px;
`;

const __SecurityPagedDesc = styled.p`
	color: #0a0a0a;
	margin-top: 20px;
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	margin-bottom: 30px;
`;
