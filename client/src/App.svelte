<script>
  // @ts-ignore
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Signup from "./pages/Signup/Signup.svelte";
  import Login from "./pages/Login/Login.svelte";
</script>

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
