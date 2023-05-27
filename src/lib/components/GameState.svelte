<script>
	export let voteopen = false;
	export let finished = true;
	export let spend = 0;
	export let round = 0;
	export let user = {};
</script>

{#if round === 0}
	<div>
		Na de eerst aflevering, rond 21u45, kan je voor de eerste keer stemmen (tot en met de start van
		de volgende aflevering).
	</div>
{:else if finished}
	<div class="voting">
		<p class="title">Het avontuur zit erop 😢</p>
		<div class="new">
			De eindscores zijn berekend!<br />
			Bedankt om mee te spelen en wie weet tot volgend jaar 👋👋
		</div>
	</div>
{:else if voteopen === false && !finished}
	<div>
		Ronde {round - 1} zit erop. Vanaf 21u30 start de volgende ronde en kan je weer stemmen.
	</div>
{:else if spend > 0}
	<p class="title">Goed bezig!</p>
	<div>Je hebt deze ronde al gestemd maar aanpassen kan nog tot en met zondag 20u00.</div>
{:else}
	<div class="voting">
		<p>
			Je moet deze ronde nog stemmen.<br /> Mollen doe je <a href="/game">hier</a>.
		</p>
	</div>
{/if}
