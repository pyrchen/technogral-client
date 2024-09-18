import { TNull } from '@/types/base';

export const isNull = (value: unknown): value is TNull => value === null || value === undefined;
export const isNotNull = (value: unknown): value is NonNullable<typeof value> => value !== null && value !== undefined;

export const isString = (value: unknown): value is string => typeof value === 'string';
