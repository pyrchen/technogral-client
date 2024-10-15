import { AxiosService } from '@/services/Axios.service';
import { TApiErrorBase } from '@/types/api.base.types';
import { IAuthLoginRequest, IAuthSignUpRequest, TAuthResponse } from '@/types/auth.api.types';
import { TAny } from '@/types/base';

export class AuthService {
	private static _instance: AuthService;
	private axiosService = AxiosService.instance;

	public static get instance() {
		if (!AuthService._instance) {
			AuthService._instance = new AuthService();
		}

		return AuthService._instance;
	}

	async login(credentials: IAuthLoginRequest) {
		try {
			const response = await this.axiosService.api.post<TAuthResponse>('api/auth/login', credentials);
			return response.data;
		} catch (error: TAny) {
			return error.response.data as TApiErrorBase;
		}
	}

	async signup(credentials: IAuthSignUpRequest) {
		try {
			const response = await this.axiosService.api.post('/api/auth/register', credentials);
			return response.data;
		} catch (error: TAny) {
			return error.response.data as TApiErrorBase;
		}
	}

	async refresh() {
		try {
			const response = await this.axiosService.api.post<TAuthResponse>('/api/auth/refresh');
			return response.data;
		} catch (error: TAny) {
			return error.response.data as TApiErrorBase;
		}
	}

	async logout() {
		try {
			const response = await this.axiosService.api.post('/api/auth/logout');
			return response.data;
		} catch (error: TAny) {
			return error.response.data as TApiErrorBase;
		}
	}
}
