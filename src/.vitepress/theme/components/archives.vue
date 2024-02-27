<script lang="ts" setup>

import { data as groupedPosts } from '../libs/posts.data'

const formatDate = (raw: string): string => {
  const date = new Date(raw)
  return date.toLocaleDateString('ja-JP', {
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="main">
    <h1>投稿一覧</h1>
    <section v-for="year in Object.keys(groupedPosts).reverse()" :key="year">
      <h2 class="postYear">{{ year }}</h2>
      <ul style="list-style-type: none;">
        <li v-for="post in groupedPosts[year]" :key="post.url">
          <article class="post">
            <a :href="post.url" class="postLink">{{ post.title }}</a>
            <time :datetime="post.date" class="postDate">{{ formatDate(post.date) }}</time>
          </article>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.postYear,
.postLink,
.post,
.postDate,
h1 {
  user-select: none;
}

.postYear {
  margin-top: 1rem;
  margin-bottom: 0;
  width: 100%;
  border-bottom: 1px solid;
}

.postLink {
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--vp-c-brand);
  }
}

.post {
  display: flex;
  justify-content: space-between;
}

.postDate {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  text-align: right;
}

.main {
  margin: 0 1rem;

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 1024px;
  }
}
</style>
