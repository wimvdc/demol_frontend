<script>
	import { postData } from '$lib/utils';

	let someResult = {};

	async function calculateNormalScore() {
		const result = await postData('/v1/score/calculate/', {});
		someResult = result;
	}
</script>

<h2>
	<button class="button is-primary is-rounded" on:click={calculateNormalScore}>Calcute score</button
	>
	<p>{JSON.stringify(someResult)}</p>
</h2>
