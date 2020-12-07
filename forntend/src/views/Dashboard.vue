<template>
  <div>
    <template>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import PostCard from "../components/PostCard";
export default {
  components: { PostCard },
  data() {
    return { posts: "" };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/posts/")
      .then(response => (this.posts = response.data));
  }
};
</script>
