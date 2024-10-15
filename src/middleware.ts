import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;
	const url = request.nextUrl.clone();

	const refreshToken = request.cookies.get('refreshToken');
}
