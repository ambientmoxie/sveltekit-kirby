<script>
  export let data;
</script>

{#if data.status == "ok"}
  {#each data.posts as post}
    <li>
      <a href={`/posts/${post.url.split("/").pop()}`}>{post.title}</a>
    </li>
  {/each}
{/if}
