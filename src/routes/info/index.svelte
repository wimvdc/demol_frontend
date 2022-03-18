<script context="module">
	export const prerender = true;
</script>

<div class="container">
	<section class="section">
		<h1 class="title"><span>Hoe werkt het?</span></h1>
		<ul>
			<li>Na iedere aflevering, vanaf 22u00, kan je stemmen.</li>
			<li>Zit je verdachte na de aflevering nog in het spel? Dan score je punten!</li>
			<li>
				Punten worden op volgende manier berekend: 1 punten maal het aflevering nummer. <br />
				Voorbeeld: 1 punt voor het eerste aflevering, 2 voor het tweede aflevering, etc. <br />Ligt
				je verdachte er toch onverwachts uit? Geen probleem, dan krijg je geen punten deze ronde
				maar kan je gewoon terug stemmen voor de volgende ronde!
			</li>
			<!--li>
				Tijdens de laatste ronde moet je enkel jouw Mol kiezen. Na de bekendmaking van De Mol krijg
				je 100 punten bij een juiste gok. Daarna gebeurd de finale scoreberekening op basis van
				volgende logica: de punten die je doorheen alle voorgaande rondes hebt ingezet op De Mol
				worden bij je aantal punten na ronde 6 opgeteld.
			</li-->
			<li>
				Na de bekendmaking van de Mol zullen de definitieve scores worden berekend. Je krijgt voor
				iedere keer dat je de mol juist hebt aangeduid, extra punten.
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
	<section class="section">
		<h1 class="title"><span>GDPR</span></h1>
		<p class="align-inital">
			Registeren is niet nodig, momenteel kan je inloggen aan de hand van je Google- of je Facebook
			account. We vragen slechts een minimum aan gegevens aan de login-provider, namelijk: Google of
			Facebook ID en je volledige naam. Deze gegevens worden <strong>niet</strong> gedeeld met derde
			partijen. <br />
			Wanneer je inlogt, ga je akkoord dat deze website de bovenstaande gegevens mag beheren in context
			van deze pronostiek. <br />
			Enkele dagen na laatste afleveringen worden alle gegevens definitief gewist.
		</p>
		<!--p class="align-inital">
			Wij gebruiken Google Analytics om de gebruikerservaring te kunnen optimaliseren. Het gebruik
			van een Ad Blocker zorgt ervoor dat deze data niet doorstroomt, het gebruik hiervan wordt
			aangemoedigd indien je dit niet wenst.
		</p-->
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
			Je kan contact me mij opnemen via het "Wie is de mol" forum (<a
				href="https://forum.wieisdemol.be/ucp.php?i=pm&mode=compose&u=4499"
				target="_blank"
				rel="noopener">klik</a
			>).
		</p>
	</section>
	<section class="section">
		<h1 class="title"><span>Extra informatie</span></h1>
		<p>
			<a
				href="https://www.wieisdemol.be/"
				target="_blank"
				rel="noopener"
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
</style>
