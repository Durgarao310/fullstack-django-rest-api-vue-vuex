import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isNewUser: true
  },
  getters: {
    user: state => state.user,
    isNewUser: state => state.isNewUser
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.log(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.access}`;
      state.user = userData;
    },
    LOGOUT() {
      localStorage.removeItem("user");
      location.reload();
    },
    IS_NEW_USER(state, isNewUser) {
      state.isNewUser = isNewUser;
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/rest-auth/registration/", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
          commit("IS_NEW_USER", false);
        });
    },
    login({ commit }, credentials) {
      return axios
        .post("http://127.0.0.1:8000/api/token/", credentials)
        .then(({ data }) => {
          console.log("Logggeeeeed iinnnnnn.....");
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },
    isNewUser({ commit }, isNewUser) {
      commit("IS_NEW_USER", isNewUser);
    }
  }
});
