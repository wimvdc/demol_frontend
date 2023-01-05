<script>
	import { onMount } from 'svelte';
	import { getData, postData, preCandidates } from '$lib/utils';

	let candidates = preCandidates;
	let voteopen = false;
	let result = 0;
	// let selected = { uuid: '' };
	let startPoints = 0;
	let availablePoints = startPoints;


	onMount(async () => {
		const result = await Promise.allSettled([
			getData('/v1/game/info'),
			getData('/v1/candidates')
		]);
		voteopen = result[0].value.voteopen;
		startPoints = result[0].value.spendable;
		candidates = result[1].value;
		//if (result[0].value.round > 0) selected = result[2].value ? result[2].value : selected;
		availablePoints = startPoints - pointCount();
	});

	async function save(myMol) {
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
		// End game logic
		// result = 0;
		// try {
		// 	if (voteopen) {
		// 		selected = myMol;
		// 		await postData('/v1/game/mol', { mol: myMol.uuid });
		// 		result = 1;
		// 		setTimeout(() => (result = 0), 1600);
		// 	}
		// } catch (error) {
		// 	result = 3;
		// 	console.log(error);
		// } finally {
		// 	selected = await getData('/v1/game/mol');
		// }
	}

	function pointCount() {
    	return candidates.reduce((acc, item) => acc + (item.points >= 0 ? item.points : 0), 0);
	}
	function pointsChanged(e) {
		let currentPoints = candidates.reduce((acc, item) => acc + item.points, 0);
		availablePoints = startPoints - currentPoints;
	}
</script>

<svelte:head>
	<title>Mollen</title>
</svelte:head>
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
		<div class="notification is-success">Je selectie werd opgeslagen 👌</div>
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
	{#each candidates as item}
		<div class="column is-6-touch is-4-desktop has-text-centered">
			<div class="candidate" class:out={item.isOut !== 0}>
				<img
					src="/kandidaten/{item.name.toLowerCase()}.jpg"
					alt="Foto van {item.name}"
				/>
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

<style lang="scss">


	.candidate {
		&.out {
				opacity: 0.2;
			}

		.name {
			background-color: black;
			width: 55%;
			margin: 0 auto;
			color: white;
			height: 50px;
			line-height: calc(50px - 10px);
			border-radius: 50px;
			position: relative;
			border: 5px solid transparent;
			@media only screen and (max-width: 600px) {
				width: 100%;
				border-radius: 0;
			}
		}

		img {
			border-radius: 50%;
			margin-bottom: -30px;
			border: 9px solid transparent;
			opacity: 0.9;
			&.mol {
				border: 9px solid green;
				opacity: 1;
			}
			&:hover {
				cursor: pointer;
			}
			@media only screen and (max-width: 600px) {
				border-radius: 0;
				border: 0px;
			}
		}

		input {
			width: 50px;
		}
	}

	@media only screen and (max-width: 600px) {
    .name {
      width: 100%;
    }
	img {
		border: 0;
	}
    h1.mol {
      font-size: 1.25rem;
    }
  }

	h1 {
		margin-bottom: 5px;
	}

	.column {
		margin-bottom: 2em;
	}

	#messages .notification {
		margin: 12px 0;
	}
</style>
