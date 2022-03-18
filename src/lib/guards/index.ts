// import state from '$lib/state'; // stores related to app state, auth state
import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';
import { isRequestSuccesfull } from '$lib/utils';

export async function authGuard({ url }: LoadInput): Promise<LoadOutput> {
	if (['/info', '/sw.js'].includes(url.pathname)) {
		return {};
	}
	const loggedIn = await isLoggedIn();

	if (loggedIn && url.pathname === '/home') {
		const data = sessionStorage.getItem('referer');
		console.log('redirect!', data);
		if (data) {
			sessionStorage.removeItem('referer');
			return { status: 302, redirect: data };
		}
	}

	if (loggedIn && url.pathname === '/login') {
		return { status: 302, redirect: '/home' };
	} else if (loggedIn || url.pathname === '/login') {
		return {};
	} else {
		if (url.pathname.startsWith('/group')) {
			sessionStorage.setItem('referer', url.pathname);
		}
		return { status: 302, redirect: '/login' };
	}
}

async function isLoggedIn() {
	return await isRequestSuccesfull('/auth/v1/check');
}

export default {
	authGuard
};
