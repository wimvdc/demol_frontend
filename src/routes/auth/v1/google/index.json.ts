import { loginMethod } from 'sveltekit-passport-oauth2';

export const get = loginMethod('google', { scope: ['email', 'profile'] });
