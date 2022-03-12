<script>
	import { postData } from '$lib/utils';

	let group = { name: '' };

	$: formValid = group.name.length >= 4 && group.name.length <= 55;

	let result = 0;

	async function insert() {
		try {
			await postData('/v1/groups', group);
			result = 1;
		} catch (error) {
			if (error.message && error.message == 1062) {
				result = 1062;
			} else if (error.message && error.message == 7600) {
				result = 7600;
			} else {
				result = 2;
				console.log(error);
			}
		}
	}
</script>

<div class="container">
	{#if result == 0 || result == 1062}
		<div class="field">
			<label class="label" for="name">Groepsnaam</label>
			<div class="control">
				<input
					id="name"
					class="input"
					type="text"
					placeholder="Mijn eigen groep"
					autocomplete="off"
					minlength="4"
					maxlength="55"
					bind:value={group.name}
				/>
			</div>
			{#if !formValid}
				<p class="help">De naam moet tussen 5 en 55 karakters zijn</p>
			{/if}
		</div>

		<!--div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" bind:checked={group.public} />
            Deze groep mag publiek zichtbaar zijn
          </label>
        </div>
      </div-->

		<div class="field is-grouped">
			<div class="control">
				<button class="button is-success" on:click={insert} disabled={!formValid}>Opslaan</button>
			</div>
			<div class="control">
				<button class="button">Annuleren</button>
			</div>
		</div>
	{/if}

	{#if result == 1}
		<div class="notification is-primary">
			De groep is nu aangemaakt! 👌
			<br /> Terug naar <a href="/group">"Groepen"</a>
		</div>
	{/if}

	{#if result == 2}
		<div class="notification is-danger">
			Oei, er is iets fout gegaan langs onze kant 😰 <br />
			Probeer het later nog eens.
		</div>
	{/if}

	{#if result == 1062}
		<div class="notification is-danger">Woeps, deze naam is al bezet 😐</div>
	{/if}

	{#if result == 7600}
		<div class="notification is-danger">Je kan maar 5 groepen aanmaken, sorry 😞</div>
	{/if}
</div>

<style>
	input:invalid {
		border: 1px solid red;
	}
</style>
