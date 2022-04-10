<script>
	import GameState from '$lib/components/GameState.svelte';
	import { getData } from '$lib/utils';

	async function getInfo() {
		return await getData(`/v1/game/info?format=full`);
	}

	let info = getInfo();
</script>

<div class="container">
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
					{#await info then result}
						{#if result.round === 7}
							<article class="tile is-child notification is-primary" style="text-align:center;">
								<p class="title">Finale spel!</p>
								<div class="new">
									Je hebt momenteel {result.spendable} punten verdiend.<br />
									Deze laatste ronde verloopt anders dan voorgaande ronden:
									<ul>
										<li>
											Je <a href="/endgame">kiest</a> deze keer enkel jouw Mol (zonder punten).
										</li>
										<li>
											Op de <a href="/info">info</a> pagina vind je hoe eindscore zal worden berekend.
										</li>
										<li>We proberen tegen zondag 21u45 de definitieve score online te zetten.</li>
									</ul>
								</div>
							</article>
						{/if}
					{/await}
				</div>
				<div class="tile is-parent">
					<article class="tile is-child notification is-info">
						<p class="title">Groepen</p>
						<p class="subtitle">Je bent lid van volgende groepen:</p>
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
							{/await}
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
	<article class="message is-danger">
		<div class="message-header">
			<p>Danger</p>
			<button class="delete" aria-label="delete" />
		</div>
		<div class="message-body">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong
			>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
			Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
			<em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
			tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem
			eget, facilisis sodales sem.
		</div>
	</article>
</div>

<style lang="scss">
	ul.groups {
		margin-left: 20px;
		a {
			text-decoration: none;
		}
	}

	.voting {
		display: flex;
		align-items: center;
		height: 100%;
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
