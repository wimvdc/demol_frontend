<script>
	import GameState from '$lib/components/GameState.svelte';
	import { getData } from '$lib/utils';

	async function getInfo() {
		return await getData(`/v1/game/info?format=full`);
	}

	let info = getInfo();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<div class="container">
	<!--article class="message is-dark">
		<div class="message-header">
			<p>Melding</p>
		</div>
		<div class="message-body">
		</div>
	</article-->
	<div class="tile is-ancestor">
		<div class="tile is-vertical">
			<div class="tile">
				<div class="tile is-parent is-vertical">
					<article class="tile is-child notification is-danger" style="text-align:center;">
						{#await info}
							<p class="title">Laden...</p>
						{:then result}
							<p class="title">Ronde #{result.round}</p>
						{/await}
					</article>
					<article class="tile is-child notification is-warning">
						{#await info}
							Laden...
						{:then result}
							<GameState {...result} />
						{/await}
					</article>
					{#await info}{/await}
				</div>
				<div class="tile is-parent">
					<article class="tile is-child notification is-info">
						<p class="title">Groepen</p>
						{#await info}
						{:then result}
							{#if result.groups.length > 0}
								<p class="subtitle">Je bent lid van volgende groepen</p>
							{/if}
						{/await}
						<div>
							{#await info}
								Laden...
							{:then result}
								<ul class="groups">
									{#each result.groups as item, i}
										<li>
											<a href="/group/{item.uuid}">
												{item.name}
											</a>
										</li>
									{/each}
								</ul>
							{#if result.groups.length == 0}
								<p>Je kan <a href="/group/new">hier</a> zelf een groep aanmaken en mensen uitnodigen</p>
							{/if}
							{/await}
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	ul.groups {
		margin-left: 20px;
		a {
			text-decoration: none;
		}
	}

	.new {
		text-align: left;
		ul {
			margin-left: 20px;
		}
	}

	ul {
		list-style-type: disclosure-closed;
	}
</style>
