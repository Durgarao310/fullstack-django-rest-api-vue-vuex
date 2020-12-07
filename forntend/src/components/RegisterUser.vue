<template>
  <div>
    <form @submit.prevent="register">
      <label for="username">
        UserName:
      </label>
      <input v-model="username" type="text" name="name" value />
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password1">
        Password:
      </label>
      <input v-model="password1" type="password" value />
      <label for="password2">
        ConfirmPassword:
      </label>
      <input v-model="password2" type="password" value />

      <p v-if="status === 400">
        Please enter different info.
      </p>

      <button type="submit" name="button">
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
      status: null
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
          password1: this.password1,
          password2: this.password2
        })
        .then(() => {
          // this.$router.push({ name: "authenticate" });
          console.log("Successfully signed up");
        })
        .catch(err => {
          this.status = err.response.status;
        });
    }
  }
};
</script>
