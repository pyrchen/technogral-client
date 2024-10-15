import axios from 'axios';

import { AuthService } from '@/services/Auth.service';
import { TAuthResponse } from '@/types/auth.api.types';
import { TAny } from '@/types/base';

export class AxiosService {
	public api = AxiosService.createNewAxiosInstance();
	private static _instance: AxiosService;

	constructor() {
		this.setInterceptorRequest();
		this.setInterceptorResponse();
	}

	public static get instance() {
		if (!AxiosService._instance) {
			AxiosService._instance = new AxiosService();
		}

		return AxiosService._instance;
	}

	private static createNewAxiosInstance() {
		return axios.create();
	}

	private setInterceptorRequest() {
		this.api.interceptors.request.use((config) => {
			const accessToken = localStorage.getItem('accessToken');

			if (accessToken) {
				return {
					...config,
					headers: {
						...config.headers,
						Authorization: `Bearer ${accessToken}`,
					},
				} as typeof config;
			}

			return config;
		});
	}

	private setInterceptorResponse() {
		this.api.interceptors.response.use(
			(config) => {
				return config;
			},
			async (error) => {
				const authService = AuthService.instance;

				const originalConfig = error.config;
				if (error.response.status === 401 && originalConfig && !originalConfig._isRetry) {
					try {
						originalConfig._isRetry = true;
						const response = await authService.refresh();

						if (response.statusCode >= 400) {
							localStorage.removeItem('accessToken');
							return originalConfig;
						}

						localStorage.setItem('accessToken', (response as TAuthResponse).data.accessToken);

						return this.api.request({
							...originalConfig,
							_isRetry: true,
						});
					} catch (error: TAny) {}
				}
				throw error;
			}
		);
	}
}
