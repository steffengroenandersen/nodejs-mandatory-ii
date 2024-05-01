<script>
  // @ts-ignore
  import { Router, Link, Route } from "svelte-navigator";
  import { user } from "./stores/generalStore.js";
  import { onDestroy } from "svelte";


  import Home from "./pages/Home/Home.svelte";
  import Signup from "./pages/Signup/Signup.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Admin from "./pages/Admin/Admin.svelte";
  import User from "./pages/User/User.svelte";

  let currentUser;
  const unsubscribe = user.subscribe((value) => {
    currentUser = value;
  });


  function signout(){
    user.set(null);
  }

  onDestroy(() => {
    unsubscribe();
  });
console.log($user)
</script>

{#if currentUser === null}
  <!-- NOT LOGGED IN -->
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="signup">Signup</Link>
      <Link to="/login">Login</Link>
    </nav>

    <div>
      <Route path="/"><Home /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/login"><Login /></Route>
    </div>
  </Router>
{:else if currentUser.role === "admin"}
  <!-- LOGGED IN AS ADMIN -->
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <button on:click={signout}>Signout</button>
    </nav>

    <div>
      <Route path="/"><Home /></Route>
      <Route path="/admin"><Admin /></Route>
    </div>
  </Router>
  
{:else if currentUser.role === "user"}
  <!-- LOGGED IN AS USER -->
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <button on:click={signout}>Signout</button>
    </nav>

    <div>
      <Route path="/"><Home /></Route>
      <Route path="/user"><User /></Route>
    </div>
  </Router>
  
{/if}
