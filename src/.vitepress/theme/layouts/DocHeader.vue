<script setup>
import { Tags, ScrollText } from 'lucide-vue-next';
import { tagsToArray, formatDate } from '../libs/utils'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <header :class="{ 'non-header': frontmatter.nonHeader }">
    <span v-if="frontmatter.date && !frontmatter.noStyle" class="date">
      <ScrollText :size="20" :stroke-width="1.5" class="icon" />{{ formatDate(frontmatter.date) }}
    </span>
    <span v-if="frontmatter.tags" class="tags">
      <Tags :size="20" :stroke-width="1.5" class="icon" />
      <template v-for="(tag, index) in tagsToArray(frontmatter.tags)">
        <a :href="`/tags/${tag}`">{{ tag }}</a><span v-if="index < tagsToArray(frontmatter.tags).length - 1">・</span>
      </template>
    </span>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--vp-c-text-2);
  padding-bottom: 15px;
  border-bottom: 1px solid var(--vp-c-border);
  user-select: none;
}

header.non-header {
  display: none;
}

.date,
.tags {
  display: flex;
  align-items: center;
  padding-right: 16px;
}

.icon {
  margin-right: 4px;
}
</style>
