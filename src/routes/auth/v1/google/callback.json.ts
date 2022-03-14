import { callbackMethod } from 'sveltekit-passport-oauth2';

export const get = callbackMethod(
	'google',
	(request: ServerRequest<OAuthSession>, response: OAuthResponse) => {
		if (request.locals.authenticated) {
			Database[request.locals.cookieId] = {
				...request.locals,
				roles: ['guest', 'admin']
			}; //just an example
			return response.redirect('/home');
		}
		return response.redirect('/about');
	}
);
