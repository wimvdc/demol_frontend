<script>
	export let voteopen = false;
	export let finished = true;
	export let didVote = false;
	export let round = 0;
	export let user = {};
</script>

{#if round === 0}
	<div>
		Na de eerst aflevering, om 22u00, kan je beginnen met stemmen (tot en met de start van de
		volgende aflevering).
	</div>
{:else if round === 0}
	<div class="voting">
		<p class="title">Het avontuur zit erop!</p>
		<div class="new">
			Den eindscores zijn berekend!<br />
		</div>
	</div>
{:else if voteopen === false && !finished}
	<div>
		Ronde {round - 1} zit erop. Vanaf 21u35 start de volgende ronde en kan je weer stemmen.
	</div>
{:else if didVote}
	<p class="title">Goed bezig, {user.firstname}!</p>
	<div>
		Je hebt deze ronde al gestemd!<br />
		Aanpassen kan nog tot en met zondag 20u00.
	</div>
{:else}
	<div class="voting">
		<p>
			Je moet deze ronde nog stemmen.<br /> Mollen doe je <a href="/game">hier</a>.
		</p>
	</div>
{/if}
