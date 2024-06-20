<script>
  export let data;
</script>

{#if data.status == "ok"}
  <article>
    <h1>{data.post.title}</h1>
  </article>
{/if}
