<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getData } from '$lib/utils';

	let result = 0;

	onMount(async () => {
		try {
			let sucess = await getData(`/v1/groups/invite/${$page.params.id}`);
			if (sucess) {
				result = 1;
				setTimeout(() => {
					replace('/group/' + sucess.uuid);
				}, 2500);
			} else result = -1;
		} catch (error) {
			console.log(error);
			result = -1;
		}
	});
</script>

<div class="container">
	{#if result == -1}
		<div class="notification is-danger">
			Verdorie! Iemand is aan het mollen want de aanvraag is mislukt... <br />
			Ben je zeker dat je de juiste link hebt gekregen? 🧐
		</div>
	{/if}
	{#if result == 1}
		<div class="notification is-success">Yes! 😎 Je hoort officieel bij de groep!</div>
	{/if}
</div>

<style>
</style>
