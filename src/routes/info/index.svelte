<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>FAQ</title>
</svelte:head>

<div class="container">
	<section class="section">
		<h1 class="title"><span>Hoe werkt het?</span></h1>
		<ul>
			<li>De eerste ronde start direct na aflevering 1 en je krijgt 3 punten om te starten.</li>
			<li>Na iedere aflevering, rond 21u40, kan je beginnen met stemmen.</li>
			<li>
				Je gebruikt jouw punten om in te zetten. Je kan 1 of meerdere punten inzetten op 0 of
				meerdere kandidaten.
			</li>
			<li>Zit je verdachte na de aflevering nog in het spel? Dan score je punten!</li>
			<li>
				Punten worden op volgende manier berekend: 1 punt maal het ronde nummer maal het aantal
				ingezette punten.
			</li>
			<li>
				Voorbeeld: Aflevering 3 is net afgelopen. Je had 5 punten om in te zetten en hebt 4 punten
				ingezet, telkens 1 punt op een andere kandidaat. <br />
				Spijtig heeft 1 van je verdachte een rood scherm gekregen. Dan score 3 punten (van de overgebleven
				3 verdachten) maal 2 (want je pronostiek is van ronde 2) dat zijn 6 punten. <br />
				Je krijgt je originele 5 punten terug en jouw totaal is nu 11 punten. Deze kan je opnieuw inzetten
				voor de volgende ronde.
			</li>
			<li>
				Ligt je verdachte er toch uit? Geen probleem, dan krijg je geen punten deze ronde maar kan
				je gewoon terug stemmen voor de volgende ronde.
			</li>
			<li>
				Tijdens de laatste stemronde score je het aantal punten die je hebt ingezet op de Mol. Je
				krijg ook nog eens alle punten die je had ingezet op de Mol in de voorbije rondes!
			</li>
		</ul>
	</section>
	<section class="section">
		<h1 class="title"><span>Groepen</span></h1>
		Je kan samen met je vrienden, familie, collega's ... spelen in 1 of meerdere groepen. Je kan zelf
		een groep aanmaken en je vrienden uitnodigen. Na iedere aflevering kan je zien hoeveel punten ze
		gescoord hebben.
		<br />De groepen zijn <strong>niet</strong> publiek, je moet dus zelf een groep maken of een
		uitnodiging krijgen!
		<br />
		Er is 1 <a href="/group/public">publieke groep</a> waar iedereen automatisch in zit. Heb je dat
		liever niet of gebruik je liever een alias dan kan je dit aanpassen in
		<a href="/profile">je profiel</a>.
	</section>

	<section class="section" id="privacy">
		<h1 class="title"><span>Privacy Policy</span></h1>
		<p class="align-inital">
			Registeren is niet nodig, momenteel kan je inloggen aan de hand van je Google- of je Facebook
			account. Wanneer je voor de eerste keer inlogt vragen wij volgende gegevens aan Google of
			Facebook:
		</p>
		<ul>
			<li>voornaam</li>
			<li>achternaam</li>
			<li>openID</li>
		</ul>
		<p>Dit heeft als doel:</p>
		<ul>
			<li>je te herkennen wanneer je inlogt</li>
			<li>jezelf kenbaar te maken in de groepen waar je lid van bent</li>
			<li>ons toe te laten om jouw pronostiek op te slaan</li>
		</ul>
		<p>
			Je kan je naam zelf wijzigen op je <a href="/profile">profiel</a> pagina. Deze worden
			opgeslagen in onze eigen database en worden <strong>niet</strong> gedeeld met andere partijen.
			Wanneer je inlogt, ga je akkoord dat deze website de bovenstaande gegevens mag beheren in context
			van deze pronostiek.
		</p>
	</section>

	<section class="section" id="GDPR">
		<h1 class="title"><span>GDPR</span></h1>
		<p>
			Indien je één van jouw <a
				href="https://www.gegevensbeschermingsautoriteit.be/burger/privacy/wat-zijn-mijn-rechten"
				target="_blank"
				rel="noopener">GDPR</a
			>
			rechten willen uitoefenen, vul dan het <a href="/feedback">feedback</a> formulier in.
			<br />
			Daaronder valt ook het recht om vergeten te worden (right to be forgotten). Indien je daarvoor
			kiest, zullen we al jouw persoonlijke gegevens (inclusief pronostiek) verwijderen uit onze database.
		</p>
	</section>

	<section class="section">
		<h1 class="title"><span>Disclaimer</span></h1>
		<p class="align-inital">
			Deze website heeft geen affiniteit met de bedenkers/productie van "De Mol". Dit is een
			privé-initiatief zonder enig commercieel belang of winstoogmerk.
		</p>
	</section>
	<section class="section">
		<h1 class="title"><span>Contact</span></h1>
		<p class="align-inital">
			Je kan contact met ons opnemen via het <a href="/feedback">feedback</a> formulier.
		</p>
	</section>
	<section class="section">
		<h1 class="title"><span>Extra informatie</span></h1>
		<p>
			<a
				href="https://www.wieisdemol.com/"
				target="_blank"
				rel="noreferer"
				class="button is-link is-outlined">Fansite</a
			>
			<a
				href="https://www.goplay.be/de-mol#afleveringen"
				target="_blank"
				rel="noopener"
				class="button is-link is-outlined">Online afleveringen</a
			>
		</p>
	</section>
</div>

<style>
	section:not(h1) {
		font-size: 17px;
	}
	ul {
		list-style-type: disclosure-closed;
		margin-left: 15px;
	}
	h1.title span {
		background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
		background-repeat: no-repeat;
		background-size: 100% 0.2em;
		background-position: 0 88%;
		transition: background-size 0.25s ease-in;
	}
	a i {
		padding-right: 5px;
	}

	p {
		margin: 5px 0;
	}
</style>
