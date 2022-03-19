<script context="module" lang="ts">
	import { browser } from '$app/env';
	export const ssr = false;
</script>

<script>
	import { baseUrl } from '$lib/utils';
	export let isLoggedIn = true;

	$: if (isLoggedIn) {
		setTimeout(() => {
			document.querySelectorAll('a.navbar-item').forEach((navitem) => {
				navitem.addEventListener('click', (e) => {
					document.getElementById('basicnavbar').classList.toggle('is-active');
				});
			});
		}, 1000);
	}

	document.addEventListener('DOMContentLoaded', () => {
		const navbarBurgers = document.getElementById('menu');
		navbarBurgers.addEventListener('click', () => {
			document.getElementById(navbarBurgers.dataset.target).classList.toggle('is-active');
			navbarBurgers.classList.toggle('is-active');
		});
	});
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="/home" id="appname"> De Mol '22 </a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			id="menu"
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="basicnavbar"
		>
			<i class="fa fa-user-circle" />
		</a>
	</div>

	<div id="basicnavbar" class="navbar-menu">
		<div class="navbar-start">
			{#if isLoggedIn}
				<a class="navbar-item" href="/game"> Mollen </a>
				<a class="navbar-item" href="/group"> Groepen </a>
				<div class="navbar-item has-dropdown is-hoverable">
					<!--svelte-ignore a11y-missing-attribute-->
					<a class="navbar-link"> Statistieken </a>
					<div class="navbar-dropdown">
						<a class="navbar-item" href="/insight/me"> Mijn inzet </a>
						<a class="navbar-item" href="/insight"> Iedereen zijn inzet </a>
					</div>
				</div>
			{/if}
			<a class="navbar-item" href="/info"> Info </a>
		</div>

		<div class="navbar-end">
			{#if isLoggedIn}
				<div class="navbar-item has-dropdown is-hoverable">
					<!-- svelte-ignore a11y-missing-attribute -->
					<a id="me" class="navbar-link is-arrowless"> <i class="fa-solid fa-user" /> </a>
					<div class="navbar-dropdown is-right">
						<a class="navbar-item" href="/profile"> Mijn Profiel </a>
						<!--a class="navbar-item" href="/feedback"> Feedback </a-->
						<a class="navbar-item" href="{baseUrl}/auth/v1/logout"> Uitloggen </a>
					</div>
				</div>
			{:else}
				<div class="navbar-item">
					<a class="navbar-item" href="/login"> Inloggen </a>
				</div>
			{/if}
		</div>
	</div>
</nav>

<style lang="scss">
	.navbar {
		background: #071217;
	}

	#appname {
		color: white;
		font-weight: 700;
	}

	i.fa {
		font-size: 23px;
	}

	#menu i.fa {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	a.navbar-item,
	i.fa-user {
		color: #babcc0;
		&:hover {
			color: black;
		}
	}

	@media screen and (max-width: 1024px) {
		#me {
			padding: 0;
		}

		#me i {
			display: none;
		}

		a:hover {
			color: white;
		}
	}
</style>
