<script>
	import { onMount } from 'svelte';
	import { getData, putData } from '$lib/utils';

	const maxlength = 45;
	const minlength = 3;
	let profile = { alias: '', push: false, public: 0 };
	$: formValid = profile?.alias?.length >= minlength && profile?.alias?.length <= maxlength;

	onMount(async () => {
		profile = await getData('/v1/users');
	});

	let result = 0;

	async function insert() {
		try {
			const response = await putData('/v1/users', profile);
			profile = response;
			result = 1;
		} catch (error) {
			if (error.message && error.message == 1062) {
				result = 1062;
			} else if (error.message && error.message == 7600) {
				result = 7600;
			} else {
				console.log(error);
				result = 2;
			}
		}
	}
</script>

<div class="container">
	<p class="intro">
		Wil je jouw echte naam niet gebruiken? Of wil je met je adelijke titel aangesproken worden? Stel
		dan hieronder een alias in.
	</p>
	<div class="field">
		<label class="label" for="alias">Alias</label>
		<div class="control">
			<input
				id="alias"
				class="input"
				type="text"
				placeholder="Mollenjager"
				autocomplete="off"
				{minlength}
				{maxlength}
				bind:value={profile.alias}
			/>
		</div>
		{#if !formValid}
			<p class="help">Een alias moet tussen {minlength} en {maxlength} karakters zijn</p>
		{/if}
	</div>

	<div class="field">
		<div class="control">
			<input id="public" type="checkbox" bind:checked={profile.public} />
			Zichtbaar in de publieke groep?
		</div>
	</div>

	{#if result == 1}
		<div class="notification is-primary">Je wijzigingen werden opgeslagen 👌</div>
	{/if}

	{#if result == 2}
		<div class="notification is-danger">
			Oei, er is iets fout gegaan langs onze kant 😰 <br />
			Probeer het later nog eens
		</div>
	{/if}

	{#if result == 1062}
		<div class="notification is-danger">Woeps, deze alias is al bezet 😐</div>
	{/if}

	<div class="field is-grouped">
		<div class="control">
			<button class="button is-success" on:click={insert} disabled={!formValid}>Opslaan</button>
		</div>
	</div>

	<hr />
</div>

<style>
	input:invalid {
		border: 1px solid red;
	}

	p.intro {
		padding-bottom: 15px;
	}
</style>
