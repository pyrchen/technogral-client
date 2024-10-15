import { useRouter } from 'next/navigation';

import { ReactNode, useEffect } from 'react';

import { useIsAuthenticated } from '@/store/auth';

export const UnauthorisedForbiddenRoute = ({ children }: { children: ReactNode }) => {
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push('/auth/signin'); // Перенаправление на страницу входа
		}
	}, [isAuthenticated, router]);

	return isAuthenticated ? children : null; // Отображаем детей только если пользователь аутентифицирован
};

export const AuthorisedForbiddenRoute = ({ children }: { children: ReactNode }) => {
	const isAuthenticated = useIsAuthenticated();
	const router = useRouter();

	useEffect(() => {
		if (isAuthenticated) {
			router.back(); // Перенаправление на страницу входа
		}
	}, [isAuthenticated, router]);

	return isAuthenticated ? children : null; // Отображаем детей только если пользователь аутентифицирован
};
