<script>
	import Table from '$lib/components/Table.svelte';
	import { getData } from '$lib/utils';

	async function getGroups() {
		return await getData(`/v1/groups`);
	}

	let data = getGroups();
</script>

<div class="container">
	<a href="/group/new" class="float">
		<i class="fas fa-plus" />
	</a>
	{#await data then groups}
		<Table names={['Groepsnaam', '# leden']} headerClass="has-background-warning">
			{#each groups as group}
				<tr>
					<td>
						{#if group.uuid}
							<a href="/group/{group.uuid}">{group.name}</a>
						{:else}
							{group.name}
						{/if}
					</td>
					<td>{group.members}</td>
				</tr>
			{/each}
		</Table>
	{/await}
</div>

<style>
	td {
		padding: 15px;
		font-weight: 300;
		color: black;
	}
	.float {
		position: fixed;
		width: 40px;
		height: 40px;
		bottom: 40px;
		right: 40px;
		line-height: 40px;
		background-color: #00d1b2;
		color: #fff;
		border-radius: 50px;
		text-align: center;
		box-shadow: 2px 2px 3px #999;
	}

	.float:hover {
		opacity: 0.8;
	}
</style>
