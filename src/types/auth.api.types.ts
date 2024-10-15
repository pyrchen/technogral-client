import { IApiTimestamps, TApiBase } from '@/types/api.base.types';

export interface IUser extends IApiTimestamps {
	avatar: string;
	birthday: string;
	dislikes: number;
	likes: number;
	email: string;
	gender: number;
	id: string;
	login: string;
	nickname: string;
	password: string;
	role: number;
}

export interface IAuthLoginRequest {
	email: string;
	password: string;
}

export interface IAuthSignUpRequest extends IAuthLoginRequest {}

export type TAuthResponse = TApiBase<
	IUser & {
		accessToken: string;
	}
>;
