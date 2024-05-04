<script>
  import { Router, Link, Route, navigate } from "svelte-navigator";
  import { user } from "../stores/generalStore.js";
  import AdminRoute from "../../util/AdminRoute.svelte";

  import Home from "../pages/Home/Home.svelte";
  import Signup from "../pages/Signup/Signup.svelte";
  import Login from "../pages/Login/Login.svelte";
  import Admin from "../pages/Admin/Admin.svelte";
  import User from "../pages/User/User.svelte";

  function handleLogout() {
    $user = null;
    navigate("/");
  }
</script>

<Router>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-5">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active">Home</Link>
          </li>

          {#if $user === null}
            <li class="nav-item">
              <Link to="/signup" class="nav-link active">Signup</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="nav-link active">Login</Link>
            </li>
          {/if}

          {#if $user?.role === "admin"}
            <li class="nav-item">
              <Link to="/admin" class="nav-link active">Admin</Link>
            </li>
          {/if}

          {#if $user?.role === "user"}
            <li class="nav-item">
              <Link to="/user" class="nav-link active">User</Link>
            </li>
          {/if}

          {#if $user !== null}
            <li class="nav-item">
              <button on:click={handleLogout} type="button" class="btn btn-dark">Logout</button>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>

  <Route path="/"><Home /></Route>
  <Route path="/signup"><Signup /></Route>
  <Route path="/login"><Login /></Route>
  <AdminRoute path="/admin"><Admin /></AdminRoute>
  <Route path="/user"><User /></Route>
</Router>
