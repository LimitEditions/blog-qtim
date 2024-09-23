<template>
  <section class="container">
    <div class="second-container">
      <h1 class="articles__header">Articles</h1>
      <div class="articles-grid">
        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="article__card"
          @mouseover="hoveredPostId = post.id"
          @mouseleave="hoveredPostId = null"
        >
          <img
            :src="post.image"
            alt="Article Image"
            class="article__card_img"
          />
          <p class="article__card_desc">{{ post.title }}</p>
          <NuxtLink
            class="article__card_details"
            v-show="hoveredPostId === post.id"
            :to="`/details/${post.id}`"
          >
            Read more
          </NuxtLink>
        </div>
      </div>
      <div class="pagination">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="goToPage(page)"
          :class="{
            pagination__btn_active: page === currentPage,
            pagination__btn: page !== currentPage,
          }"
        >
          {{ page }}
        </button>
        <button @click="nextPage" class="pagination__btn_next">
          <svg
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L6.5 6.5L1.5 11.5"
              stroke="#494949"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

export interface Post {
  id: string;
  image: string;
  title: string;
  description?: string;
}

const { data: posts } = await useAsyncData<Post[]>(
  'posts',
  () => $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts')
);

const currentPage = ref<number>(1);
const postsPerPage = 8;
const maxPageButtons = 5;
const hoveredPostId = ref<string | null>(null);

const paginatedPosts = computed<Post[]>(() => {
  if (!posts.value) return [];
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return posts.value.slice(start, end);
});

const totalPages = computed<number>(() => {
  if (!posts.value) return 0;
  return Math.ceil(posts.value.length / postsPerPage);
});

const visiblePages = computed<number[]>(() => {
  if (!posts.value) return [];
  const pages = Array.from({ length: totalPages.value }, (_, i) => i + 1);
  const startPage = Math.max(
    1,
    currentPage.value - Math.floor(maxPageButtons / 2)
  );
  const endPage = Math.min(totalPages.value, startPage + maxPageButtons - 1);
  return pages.slice(startPage - 1, endPage);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<style scoped lang="scss">
.articles {
  &__header {
    font-size: 84px;
    font-weight: 400;
    line-height: 84px;
    margin-top: 120px;
    margin-bottom: 59px;
  }
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  row-gap: 44px;

  .article__card {
    &_img {
      width: 280px;
      height: 280px;
    }

    &_desc {
      font-size: 20px;
      line-height: 24px;
      margin-top: 24px;
      margin-bottom: 12px;
      text-align: left;
    }

    &_details {
      font-size: 20px;
      line-height: 24px;
      text-align: left;
      color: $secondary-color;
    }
  }
}

.pagination {
  display: flex;
  justify-content: start;
  margin-top: 50px;
  gap: 8px;
  margin-bottom: 140px;

  &__btn {
    color: $primary-color;
    background-color: #F3F3F3;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: none;
    cursor: pointer;

    &_active {
      background-color: $primary-color;
      color: #ffffff;
      cursor: pointer;
      width: 44px;
      height: 44px;
      border-radius: 12px;
    }

    &_next {
      border: 1px solid #e8e8e8;
      background-color: #ffffff;
      color: $primary-color;
      cursor: pointer;
      width: 44px;
      height: 44px;
      border-radius: 12px;
    }
  }
}
</style>
