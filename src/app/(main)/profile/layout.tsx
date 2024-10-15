'use client';

import { usePathname, useRouter } from 'next/navigation';

import { ReactNode, useEffect } from 'react';

import { ContentContainer, Tabs } from '@/components';
import { useIsAuthenticated } from '@/store/auth';

const ROUTE_PREFIX = '/profile';
const subRoutes = [
	{ path: `${ROUTE_PREFIX}`, title: 'Персональная информация' },
	{ path: `${ROUTE_PREFIX}/security`, title: 'Безопасность' },
	// { path: `${ROUTE_PREFIX}/stats`, title: 'Статистика' },
	{ path: `${ROUTE_PREFIX}/settings`, title: 'Настройка сайта' },
	{ path: `${ROUTE_PREFIX}/notifications`, title: 'Уведомления' },
	{ path: `${ROUTE_PREFIX}/privacy`, title: 'Приватность' },
];

export default function ProfileLayout({
	tabs,
	children,
}: Readonly<{
	tabs: ReactNode;
	children: ReactNode;
}>) {
	const pathname = usePathname();
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/auth/signin');
		}
	}, [isAuthenticated, router]);

	return (
		<ContentContainer>
			<Tabs tabs={subRoutes} />
			{pathname === ROUTE_PREFIX ? children : tabs}
		</ContentContainer>
	);
}
