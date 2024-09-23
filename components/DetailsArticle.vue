<template>
  <section class="container">
    <div class="second-container">
      <div class="details" v-if="post">
        <h1 class="details_header">{{ post.title }}</h1>
        <img class="details_img" :src="post.image" alt="Article Image" />
        <p class="details_about">About</p>
        <p class="details_desc">{{ post.description }}</p>
      </div>
      <div v-else>Loading...</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Post } from "./Articles.vue";

const props = defineProps<{
  post: Post | null;
}>();
</script>

<style lang="scss" scoped>
.details {
  &_header {
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
  }

  &_img {
    width: $second-container;
    height: 700px;
    margin-top: 73px;
  }

  &_about {
    line-height: 16px;
    margin-top: 80px;
    margin-bottom: 32px;
  }

  &_desc {
    width: 695px;
    font-size: 36px;
    line-height: 44.64px;
    margin-bottom: 80px;
  }
}
</style>
