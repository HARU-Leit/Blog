<script setup>
import {useData} from 'vitepress'

const {frontmatter} = useData()
</script>

<template>
  <span v-if="frontmatter.date" class="date">🗒&nbsp;投稿日：{{ frontmatter.date }}</span>
</template>

<style scoped>
.date {
  font-size: 16px;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid var(--vp-c-border);
  user-select: none;
}
</style>
