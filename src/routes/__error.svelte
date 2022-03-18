<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status // same as status: status
			}
		};
	}
</script>

<script>
	export let status;
</script>

{#if status == 404}
	<div><img alt="Pagina niet gevonden" src="/404.jpg" /></div>
{:else}
	:(
{/if}

<style>
	img {
		position: absolute;
		top: 52px;
		left: 0;
		width: 100%;
	}
</style>
