import { logoutMethod } from 'sveltekit-passport-oauth2';

export const get = logoutMethod(undefined, (request, response) => {
	return response.redirect('/');
});
