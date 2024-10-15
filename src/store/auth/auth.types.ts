import { TNullable } from '@/types/base';

export interface IAuthInitialData {
	loading: boolean;
	error: TNullable<string>;
	token: TNullable<string>;
	isAuthed: boolean;
}
