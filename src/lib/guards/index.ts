// import state from '$lib/state'; // stores related to app state, auth state
import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';
import { isRequestSuccesfull } from '$lib/utils';

// let auth = { ...state.initialAuthState };
// state.auth.subscribe((authState) => (auth = authState));

export async function authGuard({ url }: LoadInput): Promise<LoadOutput> {
	if (['/info', '/sw.js'].includes(url.pathname)) {
		return {};
	}
	const loggedIn = await isLoggedIn();

	if (loggedIn && url.pathname === '/login') {
		return { status: 302, redirect: '/home' };
	} else if (loggedIn || url.pathname === '/login') {
		return {};
	} else {
		return { status: 302, redirect: '/login' };
	}
}

async function isLoggedIn() {
	const isLoggedIn = await isRequestSuccesfull('/auth/v1/check');
	// const data = sessionStorage.getItem('referer');
	// if (isLoggedIn && data) {
	// 	sessionStorage.removeItem('referer');
	// 	push(data);
	// }
	return isLoggedIn;
}

export default {
	authGuard
};
