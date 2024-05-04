<script>
  export let tableData = [];
  
</script>

<table class="table table-striped table-hover">
  <thead>
    <tr>
      <!-- TODO: Make table component be able to iterate over headers -->
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    {#each tableData as row}
      <tr>
        <td>{row.email}</td>
        <td>{row.role}</td>
      </tr>
    {/each}
  </tbody>
</table>
