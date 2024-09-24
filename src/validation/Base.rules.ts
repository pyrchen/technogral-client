import { z } from 'zod';

const requiredMessage = 'Обязательно поле';

export const PasswordRule = z
	.string({ required_error: requiredMessage })
	.min(1, requiredMessage)
	.min(4, 'Пароль должен составлять не менее 4 символов')
	.max(24, 'Пароль должен составлять не более 24 символов');

export const EmailRule = z
	.string({ required_error: requiredMessage })
	.min(1, requiredMessage)
	.email({ message: 'Некорректный email' });
