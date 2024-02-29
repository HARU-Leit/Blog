<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { tagsToArray, formatDate } from '../libs/utils'
import { data } from '../libs/posts.data'

const postsPerPage = 5
const currentPage = ref(1)
const flattenedData = computed(() => Object.values(data).flat())
const totalPosts = computed(() => flattenedData.value.length)
const totalPages = computed(() => Math.ceil(totalPosts.value / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = currentPage.value * postsPerPage
  return flattenedData.value.slice(start, end)
})

onMounted(() => {
  currentPage.value = 1
})

const goToPage = (page: number) => {
  currentPage.value = page
}

const nextPage = () =>
  (currentPage.value = Math.min(currentPage.value + 1, totalPages.value))

const prevPage = () => (currentPage.value = Math.max(currentPage.value - 1, 1))

const visiblePages = computed(() => {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i)
  const startPage = Math.max(currentPage.value - 1, 1)
  const endPage = Math.min(startPage + 2, totalPages.value)

  if (currentPage.value === totalPages.value && totalPages.value > 2) {
    return range(totalPages.value - 2, totalPages.value).map(page => ({
      page,
      isCurrent: page === currentPage.value,
    }))
  }

  return range(startPage, endPage).map(page => ({
    page,
    isCurrent: page === currentPage.value,
  }))
})

watch(currentPage, (newVal, oldVal) => {
  console.log(`Current page changed from ${oldVal} to ${newVal}`)
})
</script>

<template>
  <div class="post-container">
    <h2>記事一覧</h2>
    <div class="post-cards">
      <div
        class="post-card"
        v-for="(post, index) in paginatedPosts"
        :key="`post-${index}`"
      >
        <a :href="post.url" class="post-title">{{ post.title }}</a>
        <p class="post-description">{{ post.description }}</p>
        <div class="post-info">
          <div class="post-tags">
            <Badge
              v-for="(tag, index) in tagsToArray(post.tags)"
              :key="`tag-${post.url}-${index}`"
              type="info"
              :text="tag"
            />
          </div>
          <div class="post-date">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="ページネーション">
      <ul class="pagination">
        <li class="page-item">
          <button @click="prevPage" class="page-link">
            <ChevronLeft :size="20" :stroke-width="1.5" />
          </button>
        </li>
        <li
          v-for="item in visiblePages"
          :key="`page-${item.page}`"
          class="page-item"
          :class="{ active: item.isCurrent }"
        >
          <button @click="() => goToPage(item.page)" class="page-link">
            {{ item.page }}
          </button>
        </li>
        <li class="page-item">
          <button @click="nextPage" class="page-link">
            <ChevronRight :size="20" :stroke-width="1.5" />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 0 !important;
}

.post-container {
  margin-top: 1rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
  }
}

.post-card {
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  background-color: var(--vp-c-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-title {
  margin: 0.25rem;
  font-size: 1.5rem;
  text-decoration: none;
}

.post-description {
  margin: 0.5rem 0.25rem 0.5rem;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  user-select: none;
}

.post-info {
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.25rem 0;
  user-select: none;
}

.post-date {
  font-size: 0.85rem;
  margin: 0.25rem 0;
  color: var(--vp-c-text-2);
  text-align: right;
  user-select: none;
}

.pagination {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  justify-content: center;
  user-select: none;
}

.page-item {
  margin: 0 0.5rem;
}

.page-link {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  background-color: var(--vp-c-background);
  color: var(--vp-c-text-1);
  text-decoration: none;

  &:hover {
    background-color: var(--vp-c-border);
  }
}

.page-item.active .page-link {
  background-color: var(--vp-c-border);
  color: var(--vp-c-background);
}
</style>
