<script>
  import { BASE_URL } from "../stores/generalStore.js";
  import { user } from "../stores/generalStore.js";
  import { fetchPost } from "../../util/api.js";
  import { navigate } from "svelte-navigator";
  import bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

  let email;
  let password;

  async function login() {
    const status = await fetchPost($BASE_URL + "/api/login", { email, password });
    user.set({ email: status.data.email, role: status.data.role });
    console.log($user);
    if (status.data.email !== undefined) {
      console.log("Success");
      navigate("/");
    } else {
      const toastLiveExample = document.getElementById("liveToast");
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

      toastBootstrap.show();
    }
  }
</script>

<div class="container mt-5">
  <div class="mt-5"><h1>Login</h1></div>
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

    <button on:click|preventDefault={login} type="submit" class="btn btn-dark">Sign in</button>
  </form>
</div>

<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Wrong login information</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">You have entered wrong information. Please try again.</div>
  </div>
</div>
