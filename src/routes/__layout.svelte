<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700');
	@import '../../node_modules/bulma/css/bulma.min.css';
	@import '../../node_modules/font-awesome/css/font-awesome.min.css';
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
