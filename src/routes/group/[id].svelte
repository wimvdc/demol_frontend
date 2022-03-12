<script>
	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import { getData } from '$lib/utils';
	import Table from '$lib/components/Table.svelte';

	let detail = { name: 'Laden...', public: 0 };
	let users = [];

	onMount(async () => {
		detail = await getData(`/v1/groups/${$page.params.id}`);
		users = await getData(`/v1/groups/${$page.params.id}/users`);
	});
</script>

<div class="container">
	<p class="title">
		<span class="underline">{detail.name}</span>
	</p>
	<section class="members">
		<Table names={['Naam', 'Punten']} headerClass="has-background-light">
			{#each users as user}
				<tr>
					<td>{user.nickname}</td>
					<td>{user.availablepoints}</td>
				</tr>
			{/each}
		</Table>
	</section>
	<section>
		<div class="notification is-link is-light">
			Wil je jouw vrienden uitnodigen in deze groep? Deel dan onderstaande unieke link:<br />
			<code>{detail.share}</code>
			<div id="social">
				Delen via:
				<a
					href="https://api.whatsapp.com/send?text={encodeURIComponent(detail.share)}"
					target="_blank"><i class="fab fa-whatsapp" /></a
				>
				of
				<a
					href="fb-messenger://share/?link={encodeURIComponent(
						detail.share
					)}&app_id=3669933689733011"
					target="_blank"><i class="fab fa-facebook-messenger" /></a
				>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.members {
		margin: 50px 0;
	}

	div.notification {
		border: 1px solid #2160c4;
	}
	code {
		word-break: break-word;
	}

	#social {
		margin-top: 10px;
		i {
			margin: 0 6px;
			font-size: 22px;
		}
	}
</style>
