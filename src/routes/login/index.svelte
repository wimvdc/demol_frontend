<script>
	import { baseUrl } from '$lib/utils';
</script>

<div class="bg">
	<div class="has-text-centered">
		<div class="row">
			<a href="{baseUrl}/auth/v1/google" class="btn-google"
				><i class="fab fa-google" />Inloggen met Google</a
			>
		</div>
		<div class="row">
			<a href="{baseUrl}/auth/v1/facebook" class="btn-facebook"
				><i class="fab fa-facebook-f" />Inloggen met Facebook</a
			>
		</div>
	</div>
</div>

<style lang="scss">
	div.bg {
		background-image: url('/bg.jpg');
		@media only screen and (max-width: 450px) {
			background-size: cover;
		}
		background-position: top;
		background-repeat: no-repeat;
		position: absolute;
		top: 52px;
		left: 0;
		width: 100%;
		height: calc(100% - 52px);
		div:first-child {
			margin-top: 20%;
			@media only screen and (min-width: 1500px) {
				margin-top: 15%;
			}
			@media only screen and (min-width: 2250px) {
				margin-top: 11%;
			}
		}
	}
	.row {
		margin: 50px;
	}
	a {
		padding: 10px 10px;
		border-radius: 4px;
		font-size: 20px;
	}
	.btn-google {
		background: #dd4b39;
		color: white;
		&:hover {
			background: white;
			border: 1px solid #dd4b39;
			color: #dd4b39;
		}
	}
	.btn-facebook {
		background: #3b5998;
		color: white;
		&:hover {
			background: white;
			border: 1px #3b5998 solid;
			color: #3b5998;
		}
	}

	i.fab {
		padding-right: 10px;
	}
</style>
