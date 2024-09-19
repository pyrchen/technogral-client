import { z } from 'zod';

const requiredMessage = 'Обязательно поле';

const email = z
	.string({ required_error: requiredMessage })
	.min(1, requiredMessage)
	.email({ message: 'Некорректный email' });
const password = z
	.string({ required_error: requiredMessage })
	.min(1, requiredMessage)
	.min(4, 'Пароль должен составлять не менее 4 символов')
	.max(24, 'Пароль должен составлять не более 24 символов');

const SignInSchema = z.object({
	email,
	password,
});

const SignUpSchema = z.object({
	email,
	password,
});

export { SignInSchema, SignUpSchema };
