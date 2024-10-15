import { TAny } from '@/types/base';

export type TApiBase<T = TAny> = {
	message: string;
	path: string;
	status: boolean;
	statusCode: number;
	timestamp: string;
	data: T;
};

export type TApiErrorBase = Omit<TApiBase, 'data'> & {
	result: {
		message: string;
		name: string;
		options: TAny;
		status: number;
		response: {
			error: string;
			message: string;
			statusCode: number;
		};
	};
};

export interface IApiTimestamps {
	createdAt: Date;
	updatedAt: Date;
}
