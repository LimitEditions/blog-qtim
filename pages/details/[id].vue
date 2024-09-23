<template>
  <div>
    <DetailsArticle :post="post" />
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/components/Articles.vue';
const route = useRoute();
const postId = route.params.id as string;

const { data: post } = await useAsyncData<Post>(`post-${postId}`, () =>
  $fetch(
    `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`
  )
);
</script>

