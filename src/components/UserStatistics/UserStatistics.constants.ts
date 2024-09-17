import { ComponentType } from 'react';

import { MessageWindowIcon, PencilIcon, ThumbUpIcon } from '@/icons';

interface IUserStat {
	type: string;
	value: number;
	title?: string;
	icon: ComponentType;
}

export const UserStatsData: IUserStat[] = [
	{ type: 'likes', value: 14263, icon: ThumbUpIcon },
	{ type: 'comments', value: 16, icon: MessageWindowIcon, title: 'комментариев' },
	{ type: 'dislikes', value: 351, icon: ThumbUpIcon },
	{ type: 'articles', value: 45, icon: PencilIcon, title: 'статей' },
];
