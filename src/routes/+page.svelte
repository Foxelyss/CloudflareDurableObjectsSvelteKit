<script lang="ts">
  import type { PageProps } from "./$types";

  let { data, form }: PageProps = $props();

  const try_english = (event: {
    charCode: number;
    preventDefault: () => void;
  }) => {
    if (
      (event.charCode >= 65 && event.charCode <= 90) ||
      (event.charCode >= 97 && event.charCode <= 122) ||
      (event.charCode >= 48 && event.charCode <= 57)
    ) {
      return;
    }
    event.preventDefault();
  };
</script>

<h1>
  Welcome to my SvelteKit App with Durable Object(All in one worker, Yeah, its
  possible!)
</h1>

<h1>Visit Counter: {data.text}</h1>

<form method="POST">
  <label for="text">Enter text for ZABOR!</label><br />
  <!-- svelte-ignore event_directive_deprecated -->
  <input
    type="text"
    id="text"
    name="text"
    minlength="3"
    maxlength="26"
    required
    on:keypress={try_english}
  /><br />
  <input type="submit" value="Submit" />
</form>
{#if form?.missing}
  <p>No!</p>
{/if}

<h2>Current words on "ZABOR"</h2>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
  {#each data.zabor as text}
    <div>{text}</div>
  {/each}
</div>
