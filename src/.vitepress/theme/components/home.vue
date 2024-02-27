<script lang="ts" setup>
import { useRoute } from 'vitepress'

const route = useRoute()

const isPosts = route.path === '/posts'
const isPlofile = route.path === '/profile'
</script>

<template>
  <div>
    <h1>Hi there, I'm Haru👋</h1>
    <p>不定期に技術的なことや趣味について書いていきます。</p>
    <div>
    </div>
  </div>
</template>

<script setup>
</script>
