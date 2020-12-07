<template>
  <div>
    <RegisterUser v-if="isNewUser" />
    <LoginUser v-else />
    <a v-if="isNewUser" class="auth-link" @click="toggleComponent"
      >Already have an account? Login.</a
    >
    <a v-else class="auth-link" @click="toggleComponent"
      >Don't have an account? Create one.</a
    >
  </div>
</template>

<script>
import RegisterUser from "../components/RegisterUser";
import LoginUser from "../components/LoginUser";
import { mapGetters } from "vuex";
export default {
  components: { RegisterUser, LoginUser },
  computed: {
    ...mapGetters(["isNewUser"])
  },
  methods: {
    toggleComponent() {
      this.$store.dispatch("isNewUser", !this.isNewUser);
    }
  }
};
</script>
