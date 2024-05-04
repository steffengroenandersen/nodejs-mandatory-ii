<script>
  import { BASE_URL } from "../stores/generalStore.js";
  import { fetchPost } from "../../util/api.js";
  import { navigate } from "svelte-navigator";

  let email;
  let password;
  let confirmedPassword;

  async function signup() {
    console.log("signup()");
    const signupRequest = {
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
    };
    console.log(signupRequest);

    await fetchPost($BASE_URL + "/api/users", signupRequest);
    navigate("/login");
  }
</script>

<div class="container mt-5">
  <div class="mt-5"><h1>Signup</h1></div>
  <div class="mt-3"><p>Enter your information below to signup as a user.</p></div>
  <form>
    <div class="row mb-3">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input bind:value={email} type="email" class="form-control" id="inputEmail" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input bind:value={password} type="password" class="form-control" id="inputPassword" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputConfirmedPassword" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input
          bind:value={confirmedPassword}
          type="password"
          class="form-control"
          id="inputConfirmedPassword"
        />
      </div>
    </div>

    <button on:click|preventDefault={signup} type="submit" class="btn btn-dark">Sign in</button>
  </form>
</div>
