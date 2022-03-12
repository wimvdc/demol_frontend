<script>
  export let names = [];
  export let headerClass = "";
</script>

<table>
  <thead class={headerClass}>
    <tr>
      {#each names as name}
        <th>{name}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    <slot />
  </tbody>
</table>

<style>
  table {
    width: 100%;
    table-layout: fixed;
  }
  thead.has-background-warning {
    border: 1px solid #ffdd57;
  }
  thead {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  tbody :global(tr) {
    height: 100%;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  tbody :global(tr:first-child) {
    border-top: none;
  }

  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    color: black;
    text-transform: uppercase;
  }
  :global(td) {
    padding: 15px;
    font-weight: 300;
    color: black;
  }

  th:last-of-type {
    width: 33%;
  }
</style>
