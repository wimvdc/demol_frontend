<script>
	import { baseUrl } from '$lib/utils';
</script>

<div class="bg">
	<div class="has-text-centered">
		<div class="row">
			<a href="{baseUrl}/auth/v1/google" class="social-button" id="google-connect">
				<span>Login via Google</span></a
			>
		</div>
		<div class="row">
			<a href="{baseUrl}/auth/v1/facebook" class="social-button" id="facebook-connect">
				<span>Login via Facebook</span></a
			>
		</div>
		<!-- <div class="row">
			<a href="{baseUrl}/auth/v1/twitter" class="social-button" id="twitter-connect">
				<span>Login via Twitter</span></a
			>
		</div> -->
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
		padding-left: 50px;
		font-size: 20px;
	}

	#facebook-connect {
		background: rgb(255, 255, 255) url('/icons/facebook.svg?sanitize=true') no-repeat scroll 5px 0px /
			30px 50px padding-box border-box;
		border: 1px solid rgb(60, 90, 154);
		span {
			box-sizing: border-box;
			color: rgb(60, 90, 154);
			cursor: pointer;
			text-align: center;
			border: 0px none rgb(255, 255, 255);
			outline: rgb(255, 255, 255) none 0px;
			-webkit-transition: all 0.3s ease;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease;
		}

		&:hover {
			border-color: rgb(60, 90, 154);
			background: rgb(60, 90, 154) url('/icons/facebook-white.svg') no-repeat scroll 5px 0px / 30px
				50px padding-box border-box;
			-webkit-transition: all 0.8s ease-out;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease-out;
			span {
				color: #fff;
				-webkit-transition: all 0.3s ease;
				-moz-transition: all 0.3s ease;
				-ms-transition: all 0.3s ease;
				-o-transition: all 0.3s ease;
				transition: all 0.3s ease;
			}
		}
	}

	#google-connect {
		background: rgb(255, 255, 255) url('/icons/google-plus.png') no-repeat scroll 5px 0px / 50px
			50px padding-box border-box;
		border: 1px solid rgb(220, 74, 61);
		span {
			box-sizing: border-box;
			color: rgb(220, 74, 61);
			cursor: pointer;
			text-align: center;
			border: 0px none rgb(220, 74, 61);
			outline: rgb(255, 255, 255) none 0px;
			-webkit-transition: all 0.3s ease;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease;
		}
		&:hover {
			border-color: rgb(220, 74, 61);
			background: rgb(220, 74, 61) url('/icons/google-plus-white.png') no-repeat scroll 5px 0px /
				50px 50px padding-box border-box;
			-webkit-transition: all 0.8s ease-out;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease-out;
			span {
				color: #fff;
				-webkit-transition: all 0.3s ease;
				-moz-transition: all 0.3s ease;
				-ms-transition: all 0.3s ease;
				-o-transition: all 0.3s ease;
				transition: all 0.3s ease;
			}
		}
	}

	#twitter-connect {
		background: rgb(255, 255, 255) url('/icons/twitter.png') no-repeat scroll 5px 1px / 45px 45px
			padding-box border-box;
		border: 1px solid rgb(85, 172, 238);
		span {
			box-sizing: border-box;
			color: rgb(85, 172, 238);
			cursor: pointer;
			text-align: center;
			//text-transform: uppercase;
			border: 0px none rgb(220, 74, 61);
			outline: rgb(255, 255, 255) none 0px;
			-webkit-transition: all 0.3s ease;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease;
		}
		&:hover {
			border-color: rgb(85, 172, 238);
			background: rgb(85, 172, 238) url('/icons/twitter-white.png') no-repeat scroll 5px 1px / 45px
				45px padding-box border-box;
			-webkit-transition: all 0.8s ease-out;
			-moz-transition: all 0.3s ease;
			-ms-transition: all 0.3s ease;
			-o-transition: all 0.3s ease;
			transition: all 0.3s ease-out;
			span {
				color: #fff;
				-webkit-transition: all 0.3s ease;
				-moz-transition: all 0.3s ease;
				-ms-transition: all 0.3s ease;
				-o-transition: all 0.3s ease;
				transition: all 0.3s ease;
			}
		}
	}
</style>
