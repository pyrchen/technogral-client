import { ComponentType } from 'react';

import { NotificationIcon, PersonalInfoIcon, PrivacyIcon, SettingsIcon, StatisticsIcon } from '@/icons';

interface CardsDataProps {
	title: string;
	description: string;
	Icon: ComponentType;
}

export const cardsData: CardsDataProps[] = [
	{
		title: 'Персональная информация',
		description: 'Управляйте своей персональной информацией',
		Icon: PersonalInfoIcon,
	},
	{
		title: 'Безопасность',
		description: 'Изменить пароль и настройки безопасности',
		Icon: PrivacyIcon,
	},
	{
		title: 'Статистика',
		description: 'Смотрите статистику своей активности на сайте',
		Icon: StatisticsIcon,
	},
	{
		title: 'Настройки сайта',
		description: 'Выбрать язык сайта, тему и часовой пояс',
		Icon: SettingsIcon,
	},
	{
		title: 'Приватность',
		description: 'Управляйте своей приватностью, привязанными аккаунтами',
		Icon: PrivacyIcon,
	},
	{
		title: 'Уведомления',
		description: 'Настроить приходящие уведомления и предпочтения',
		Icon: NotificationIcon,
	},
];
