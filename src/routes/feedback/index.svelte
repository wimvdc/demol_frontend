<script>
	import { postData  } from '$lib/utils';

  let feedback = { feedback: '', email: '' };

  $: formValid = feedback.feedback.length >= 5 && feedback.feedback.length <= 1999;

  let result = 0;

  async function insert() {
    try {
      await postData('/v1/feedback', feedback);
      result = 1;
      feedback = { feedback: '', email: '' };
    } catch (error) {
      if (error.message && error.message == 7600) {
        result = 7600;
      } else {
        result = 2;
        console.log(error);
      }
    }
  }
</script>

<div class="container">
  <p class="intro">
    Heb je opmerking(en) of een probleem? Laat dan hier iets achter. Vul ook een emailadres in als
    je een antwoord verwacht.
  </p>
  {#if result <= 1 || result == 1062}
    <div class="field">
      <label class="label" for="feedback">Opmerking</label>
      <div class="control">
        <textarea
          id="feedback"
          class="input"
          type="text"
          autocomplete="off"
          minlength="5"
          maxlength="1999"
          bind:value={feedback.feedback}
        />
      </div>

      {#if !formValid}
        <p class="help">De opmerking moet tussen de 5 en 2000 karakters zijn</p>
      {/if}
    </div>

    <div class="field">
      <label class="label" for="email">Email</label>
      <div class="control">
        <input
          id="email"
          class="input"
          type="email"
          autocomplete="off"
          minlength="5"
          maxlength="100"
          bind:value={feedback.email}
        />
      </div>
      <p class="help">Indien je graag een antwoord wil, laat dan hier je emailadres achter. We verwijderen je emailadres na het behandelen van de feedback.</p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-success" on:click={insert} disabled={!formValid}>Verzenden</button>
      </div>
    </div>
  {/if}

  {#if result == 1}
    <div class="notification is-primary">Je feedback werd verzonden! 👌</div>
  {/if}

  {#if result == 2}
    <div class="notification is-danger">
      Oei, er is iets fout gegaan langs onze kant 😰 <br />
      Probeer het later nog eens.
    </div>
  {/if}

  {#if result == 7600}
    <div class="notification is-danger">Je kan maar 5 maal feedback nalaten, sorry 😞</div>
  {/if}
</div>

<style>
  input:invalid {
    border: 1px solid red;
  }

  p.intro {
    padding-bottom: 15px;
  }

  textarea {
    height: 100px;
  }

  @media screen and (max-width: 1024px) {
    textarea {
      height: 250px;
    }
  }
</style>
