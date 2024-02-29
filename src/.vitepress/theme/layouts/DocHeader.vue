<script setup>
import { Tags, PencilLine } from 'lucide-vue-next'
import { tagsToArray, formatDate } from '../libs/utils'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <header :class="{ 'non-header': frontmatter.nonHeader }">
    <h1 class="title">{{ frontmatter.title }}</h1>
    <p class="description">{{ frontmatter.description }}</p>
    <div class="date-tags-container">
      <span v-if="frontmatter.date && !frontmatter.noStyle" class="date">
        <PencilLine :size="20" :stroke-width="1.5" class="icon" />{{
          formatDate(frontmatter.date)
        }}
      </span>
      <span v-if="frontmatter.tags" class="tags">
        <Tags :size="20" :stroke-width="1.5" class="icon" />
        <template v-for="(tag, index) in tagsToArray(frontmatter.tags)">
          <a :href="`/tags/${tag}`">{{ tag }}</a
          ><span v-if="index < tagsToArray(frontmatter.tags).length - 1"
            >・</span
          >
        </template>
      </span>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: var(--vp-c-text-3);
  padding-bottom: 15px;
  border-bottom: 1px solid var(--vp-c-border);
  user-select: none;

  &.non-header {
    display: none;
  }
}

.title,
.description {
  display: block;
  margin-bottom: 0.5rem;

  &.title {
    font-size: 2.25rem;
    color: var(--vp-c-text-1);
  }

  &.description {
    font-size: 1rem;
    margin: 1rem 0 1rem;
    color: var(--vp-c-text-2);
    border-left: 3px solid var(--vp-c-brand);
    padding-left: 1rem;
    border-radius: 1px;
  }
}

.date-tags-container,
.date,
.tags {
  display: flex;
  align-items: center;

  .date + .tags {
    margin-left: 16px;
  }
}

.icon {
  margin-right: 4px;
  margin-top: 4px;
}

a {
  position: relative;
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--vp-c-brand);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    color: var(--vp-c-brand);

    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
