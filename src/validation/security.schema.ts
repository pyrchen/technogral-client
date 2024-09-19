import { z } from 'zod';

import { EmailRule, PasswordRule } from '@/validation/Base.rules';

export const ChangePasswordSchema = z.object({
	currentPassword: PasswordRule,
	newPassword: PasswordRule,
	confirmPassword: PasswordRule,
});

export const ChangeEmailSchema = z.object({
	email: EmailRule,
});
