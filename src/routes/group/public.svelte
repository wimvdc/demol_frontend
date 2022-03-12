<script>
	import { onMount } from 'svelte';
	import { getData } from '$lib/utils';
	import Table from '$lib/components/Table.svelte';

	let detail = { name: 'Laden...' };
	let users = [];
	let me = '';

	onMount(async () => {
		let profile = await getData('/v1/users');
		me = profile.publicName;
		users = await getData(`/v1/groups/public/users`);
		detail = await getData(`/v1/groups/public`);
		document.getElementsByClassName('me')[0].scrollIntoView({ block: 'center' });
	});
</script>

<div class="container">
	<p class="title">
		<span class="underline">{detail.name}</span>
	</p>
	<section class="members">
		<Table names={['#', 'Naam', 'Punten']} headerClass="has-background-light">
			{#each users as user}
				<tr class={user.nickname === me ? 'me is-selected' : ''}>
					<td>{user.ranking}</td>
					<td>{user.nickname}</td>
					<td>{user.availablepoints}</td>
				</tr>
			{/each}
		</Table>
	</section>
	<section>
		<div class="notification is-link is-light">
			Wil je niet in deze lijst staan?<br />
			Pas dan de instellingen in je <a href="#/profile">profiel</a> aan.
		</div>
	</section>
</div>

<style lang="scss">
	section.members :global(thead th:first-child) {
		width: 20%;
	}
	.members {
		margin: 50px 0;
	}

	div.notification {
		border: 1px solid #2160c4;
	}

	tr.me {
		border: 1px solid #00d1b2;
		background-color: #00d1b2;
		td {
			color: white;
			font-weight: bold;
		}
	}
</style>
