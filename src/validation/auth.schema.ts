import { z } from 'zod';

import { EmailRule, PasswordRule } from '@/validation/Base.rules';

const SignInSchema = z.object({
	email: EmailRule,
	password: PasswordRule,
});

const SignUpSchema = z.object({
	email: EmailRule,
	password: PasswordRule,
});

export { SignInSchema, SignUpSchema };
