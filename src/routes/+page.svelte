<script>
  export let data;
</script>

{#if data.status == "ok"}
  <h1>{data.title}</h1>
  <a href="/posts">Read some notes</a>
{/if}
