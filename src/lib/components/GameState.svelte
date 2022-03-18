<script>
	export let voteopen = false;
	export let finished = false;
	export let spendable = 0;
	export let spend = 0;
	export let round = 0;
	export let user = {};
</script>

{#if round === 7}
	<div>
		Alles of niets, <a href="#/endgame">kies nu</a> je Mol!<br />
		Aanpassen kan nog tot zondag 20u00
	</div>
{:else if voteopen === false && !finished}
	<div>
		Je kan deze ronde niet meer stemmen. Vanaf 22u00 start de volgende ronde en kan je weer punten
		inzetten.
	</div>
{:else if spendable - spend <= 0}
	<p class="title">Goed bezig {user.firstname}!</p>
	<div>
		Je hebt deze ronde al je punten uitgegeven!<br />
		Aanpassen kan nog tot en met zondag 19u55.
	</div>
{:else if round < 7}
	<div class="voting">
		<p>
			Je hebt er nog <b>{spendable - spend}</b> punten die je kan verdelen.<br />
			Mollen doe je <a href="#/mollen">hier</a>.
		</p>
	</div>
{:else}
	<div class="voting">
		<p class="title">Het avontuur zit erop!</p>
		<div class="new">
			Je hebt in totaal {spendable} punten verdiend.<br />
		</div>
	</div>
{/if}
