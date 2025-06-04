<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<h1>Users: {data.text}</h1>
<h2>
  KV value before Durable Object call is: <code style="color:#bada55"
    >{data.kv_value_before}</code
  >
</h2>
<h2>
  KV value AFTER Durable Object call is: <code style="color:#bada55"
    >{data.kv_value_after}</code
  >
</h2>
