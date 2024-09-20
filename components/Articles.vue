<template>
  <section class="container">
    <div class="second-container">
      <h1>Articles</h1>
      <div class="articles-grid">
        <div v-for="post in paginatedPosts" :key="post.id" class="article-card">
          <img :src="post.image" alt="Article Image" />
          <p>{{ post.title }}</p>
          <p v-show="onHover">Read more</p>
        </div>
      </div>
      <div class="pagination">
        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)"
          :class="{'pagination__btn_active': page === currentPage, 'pagination__btn': page !== currentPage}">
          {{ page }}
        </button>
        <button @click="nextPage">></button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Post { id: string; image: string; title: string; }

const { data: posts } = await useFetch<Post[]>('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts');

const currentPage = ref(1);
const postsPerPage = 8;
const maxPageButtons = 5;
let isCurrentPage = false;

const paginatedPosts = computed(() => {
  if (!posts.value) return [];
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});

const totalPages = computed(() => {
  if (!posts.value) return 0;
  return Math.ceil(posts.value.length / postsPerPage);
});

const visiblePages = computed(() => {
  if (!posts.value) return [];
  const pages = Array.from({ length: totalPages.value }, (_, i) => i + 1);
  const startPage = Math.max(1, currentPage.value - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages.value, startPage + maxPageButtons - 1);
  return pages.slice(startPage - 1, endPage);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    isCurrentPage = true;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const onHover = () => {

}
</script>

<style scoped lang="scss">
.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .article {
    text-align: center;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.pagination {
  display: flex;
  justify-content: start;
  margin-top: 20px;

  &__btn {
    color: $primary-color;
    background-color: grey;
    width: 35px;
    height: 35px;

    &_active {
      background-color: $primary-color;
      color: #f3f3f3;
      cursor: pointer;
    }
  }
}
</style>
