<script context="module" lang="ts">
	import { browser } from '$app/env';

	export const ssr = false;
	export const prerender = false;

	import { authGuard } from '$lib/guards';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types.internal';

	export async function load({
		url,
		params,
		fetch,
		session,
		context
	}: LoadInput): Promise<LoadOutput> {
		if (browser) {
			return await authGuard({ url, params, fetch, session, context });
		} else {
			return {};
		}
	}
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
	@import '../../node_modules/bulma/css/bulma.min.css';
	@import '../../node_modules/@fortawesome/fontawesome-free/css/brands.min.css';
	@import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
