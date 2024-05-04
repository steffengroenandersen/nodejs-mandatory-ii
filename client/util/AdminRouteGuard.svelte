<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../src/stores/generalStore.js";

  const navigate = useNavigate();
  const location = useLocation();

  $: if ($user.role !== "admin") {
    navigate("/login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $user}
  <slot />
{/if}
