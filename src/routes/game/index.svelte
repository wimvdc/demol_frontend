<script>
	import { onMount } from 'svelte';
	import { getData, postData, preCandidates } from '$lib/utils';

	let candidates = preCandidates;
	let voteopen = false;
	let result = 0;
	let selected = { uuid: '' };

	onMount(async () => {
		const result = await Promise.allSettled([
			getData('/v1/game/info'),
			getData('/v1/candidates'),
			getData('/v1/game/mol')
		]);
		voteopen = result[0].value.voteopen;
		candidates = result[1].value;
		console.log(result[2].value);
		selected = result[2].value ? result[2].value : selected;
	});

	async function save(myMol) {
		result = 0;
		try {
			if (voteopen) {
				selected = myMol;
				await postData('/v1/game/mol', { mol: myMol.uuid });
				result = 1;
				setTimeout(() => (result = 0), 1600);
			}
		} catch (error) {
			result = 3;
			console.log(error);
		}
		selected = await getData('/v1/game/mol');
	}
</script>

<div class="has-text-centered">
	{#if voteopen}
		<h1 class="title is-2">Wie is De Mol?</h1>
	{:else}
		<h3 class="title is-3">Het stemmen voor deze ronde is afgelopen!</h3>
		<span />
	{/if}
</div>

<div id="messages">
	{#if result == 1}
		<div class="notification is-success">Je selectie werd opgeslagen 👌</div>
	{/if}

	{#if result == 3}
		<div class="notification is-danger">
			Oei, er is iets fout gegaan 😰 <br />
			Probeer de pagina eens te herladen
		</div>
	{/if}
</div>

<div class="columns is-mobile is-flex-wrap-wrap">
	{#each candidates as item}
		<div class="column is-6-touch is-4-desktop has-text-centered">
			<div class="candidate">
				<img
					src="/kandidaten/{item.name.toLowerCase()}.jpg"
					alt="Foto van {item.name}"
					class:mol={selected.uuid === item.uuid}
					on:click={() => save(item)}
				/>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	img {
		border-radius: 50%;
		margin-bottom: -30px;
		border: 9px solid transparent;
		opacity: 0.8;
		&.mol {
			border: 9px solid green;
			opacity: 1;
		}
		&:hover {
			cursor: pointer;
		}
	}

	h1 {
		margin-bottom: 30px;
	}

	.column {
		margin-bottom: 2em;
	}

	#messages .notification {
		margin: 12px 0;
	}
</style>
