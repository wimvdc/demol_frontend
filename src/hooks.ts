import {
	ConfigurePassportOAuth2,
	OAuthHandleInput,
	OAuthCreateCookie,
	DefaultCookieName
} from 'sveltekit-passport-oauth2';

import GoogleStrategy from 'passport-google-oauth20';

ConfigurePassportOAuth2([
	{
		strategy: new GoogleStrategy(
			{
				callbackURL: 'http://localhost:8080/auth/v1/google/callback.json',
				clientID: '_move_to_env_',
				clientSecret: '_move_to_env_',
				passReqToCallback: true
			},
			OAuthCreateCookie('molId')
		)
	}
]);
//export const handle = sequence(addUserToRequest);

//add the user info to request (you can access this info in and endpoint using `request.locals`)
async function addUserToRequest({ request, resolve }: OAuthHandleInput) {
	const cookies = cookie.parse(request.headers.cookie || '');
	const cookieId = cookies[DefaultCookieName];
	if (cookieId) {
		request.locals = Database['molId']; //change this to retrieve from database
	}
	const response = await resolve(request);
	return response;
}

//this will expose user info in session and can be retrieved in the front end using $session
export function getSession(request: ServerRequest<Locals>): Locals {
	return request.locals;
}
