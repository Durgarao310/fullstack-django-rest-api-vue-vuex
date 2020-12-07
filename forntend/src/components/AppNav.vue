<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link>

    <template v-if="user">
      <router-link to="dashboard">
        posts
      </router-link>

      <span class="nav-welcome"
        >Hello@ <span class="username">{{ user.user }}</span></span
      >

      <button type="button" class="logoutButton" @click="logout">
        Log out
      </button>
    </template>

    <template v-else>
      <router-link to="authenticate" class="button">
        Login
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 30px;
  padding: 0.2em 1em;
  background: blue;
}
.nav-welcome {
  margin-left: auto;
  margin-right: 1rem;
  color: white;
  // font-size: 3mm;
}
a {
  // font-weight: bold;
  color: #2c3e50;
  margin: auto 0.8em auto 0.4em;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
}
.router-link-exact-active {
  color: white;
  border-bottom: 2px solid #fff;
}
button,
.button {
  margin-left: auto;
  background: white;
  text-decoration: none;
  color: #2c3e50;
  &.router-link-active {
    color: #2c3e50;
  }
}
.logoutButton {
  cursor: pointer;
}
.nav-welcome + button {
  margin-left: 0;
}
.username {
  color: whitesmoke;
  font-size: 5mm;
}
</style>
