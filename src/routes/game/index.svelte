<script>
	import { onMount } from 'svelte';
	import { getData, postData, preCandidates } from '$lib/utils';

	let candidates = preCandidates;
	let startPoints = 0;
	let voteopen = true;
	let availablePoints = startPoints;
	let result = 0;

	onMount(async () => {
		const result = await Promise.allSettled([getData('/v1/game/info'), getData('/v1/candidates')]);
		if (result[0].value.endgameopen) {
			replace('/endgame');
		}
		voteopen = result[0].value.voteopen;
		startPoints = result[0].value.spendable;
		candidates = result[1].value;
		availablePoints = startPoints - pointCount();
	});

	async function save() {
		try {
			if (startPoints < pointCount()) result = 2;
			else {
				let guess = candidates.filter((mol) => Number(mol.points) != 0);
				await postData('/v1/game/mol', guess);
				result = 1;
			}
		} catch (error) {
			result = 3;
			console.log(error);
		}
		candidates = await getData('/v1/candidates');
	}

	function pointCount() {
		return candidates.reduce((acc, item) => acc + (item.points >= 0 ? item.points : 0), 0);
	}

	function pointsChanged(e) {
		let currentPoints = candidates.reduce((acc, item) => acc + item.points, 0);
		availablePoints = startPoints - currentPoints;
	}
</script>

<div class="has-text-centered">
	{#if voteopen}
		<h4 class="title is-4">Beschikbare punten: {availablePoints}</h4>
		<button class="button is-success" on:click={save}>Opslaan</button>
	{:else}
		<h3 class="title is-3">Het stemmen voor deze ronde is afgelopen!</h3>
		<span />
	{/if}
</div>

<div id="messages">
	{#if result == 1}
		<div class="notification is-success">Je wijzigingen werden opgeslagen 👌</div>
	{/if}

	{#if result == 2}
		<div class="notification is-danger">
			Oei, je hebt te veel punten uitgedeeld! 😰 <br />
			Je kunt deze ronde maar <b>{startPoints}</b> punten verdelen.
		</div>
	{/if}

	{#if result == 3}
		<div class="notification is-danger">
			Oei, er is iets fout gegaan 😰 <br />
			Probeer de pagina eens te herladen
		</div>
	{/if}
</div>

<div class="columns is-mobile is-flex-wrap-wrap">
	{#each candidates as item, i}
		<div class="column is-6-touch is-3-desktop has-text-centered">
			<div class="candidate" class:out={item.isOut}>
				<img src="/kandidaten/{item.name.toLowerCase()}.jpg" alt="Foto van {item.name}" />
				<div class="name">
					<h1 class="mol">
						{voteopen ? item.name : item.name + (item.points ? ': ' + item.points : '')}
					</h1>
					{#if !item.isOut && voteopen}
						<input type="number" min="0" bind:value={item.points} on:change={pointsChanged} />
					{/if}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	h1.mol {
		font-size: 1.5rem;
	}
	input[type='number'] {
		width: 60px;
		margin-top: 15px;
		font-size: 16px;
	}
	img {
		border-radius: 50%;
		margin-bottom: -30px;
		border: 5px solid transparent;
	}
	.name {
		background-color: black;
		width: 65%;
		margin: 0 auto;
		color: white;
		height: 50px;
		line-height: calc(50px - 10px);
		border-radius: 50px;
		position: relative;
		border: 5px solid transparent;
	}
	.out {
		opacity: 0.25;
	}

	h1 {
		font-weight: 600;
	}
	.column {
		margin-bottom: 3em;
	}

	#messages .notification {
		margin: 12px 0;
	}

	@media only screen and (max-width: 600px) {
		.name {
			width: 100%;
		}
		h1.mol {
			font-size: 1.25rem;
		}
	}
</style>
