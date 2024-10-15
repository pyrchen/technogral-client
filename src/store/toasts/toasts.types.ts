export const enum ToastType {
	SUCCESS = 1,
	WARNING,
	ERROR,
}

export interface IToast {
	id: string;
	type: ToastType;
	message: string;
	duration: number;
}

export interface IToastsInitialData {
	toasts: IToast[];
}

export interface IAddToastPayload extends Omit<IToast, 'duration' | 'id'> {
	duration?: number;
}
