<script lang="ts" setup>
import { useRouter } from 'vitepress'
import { ArrowRight } from 'lucide-vue-next'
import { tagsToArray, formatDate } from '../libs/utils'
import { data } from '../libs/posts.data'

const latestPosts = Object.values(data).flat().slice(0, 5)

const router = useRouter()
</script>

<template>
  <div class="main">
    <h1>Hi there, I'm <span class="name">Haru</span>👋</h1>
    <p>技術や趣味について不定期に投稿します。</p>
    <button class="primary" @click="router.go('/posts/')">
      記事一覧
      <ArrowRight :size="20" :stroke-width="1.5" class="icon" />
    </button>
    <button @click="router.go('/profile/')">プロフィール</button>
    <h2>新着記事</h2>
    <div class="post-cards">
      <div
        class="post-card"
        v-for="(post, index) in latestPosts"
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
  </div>
</template>

<style scoped lang="scss">
.main {
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
  }
}

h1 {
  font-size: 3rem;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

p {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.name {
  color: var(--vp-c-brand);
}

button {
  margin: 1rem 1rem 0 0;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  background-color: var(--vp-c-primary);
  color: var(--vp-c-text-1);
  transition:
    background-color 0.3s,
    color 0.3s;
  user-select: none;

  &:hover {
    background-color: var(--vp-c-border);
  }

  .icon {
    margin-left: 0.5rem;
  }
}

.primary {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-primary);

  &:hover {
    background-color: var(--vp-c-brand-dark);
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
</style>
