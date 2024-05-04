<script>
  import { BASE_URL } from "../../stores/generalStore";
  import Table from "../../components/Table.svelte";

  import { fetchGet } from "../../../util/api";
  import { onMount } from "svelte";

  let tableData;

  onMount(async () => {
    tableData = await fetchGet($BASE_URL + "/api/users");
  });

</script>

<div class="container">
  <h1>This is the Admin Overview board</h1>
  <p>This is only accessible Admins...</p>

  <h2>List of users in our application</h2>
  <Table {tableData} />
</div>
