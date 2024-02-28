---
title: "Haruのプロフィール"
description: "Haruのプロフィールです。"
nonHeader: true
---

<script setup lang="ts">
const birth = new Date('2003-06');
const now = new Date();
let age = now.getFullYear() - birth.getFullYear();
const isBirthdayPassed = now.getMonth() > birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
if (!isBirthdayPassed) {
  age -= 1;
}
</script>

# Haru

  ``` ts
// 人生の目標
const goal = '最大限の努力をして、楽しむこと';

```

#### プロフィール

- 年齢: {{ age }}歳
- 居住地: 日本
- 職業: 新卒のエンジニア
- 趣味: ゲーム、アニメ、プログラミング

#### 言語

  <div class="icon">
    <img src="https://img.shields.io/badge/HTML-DD4B25?logo=HTML5&logoColor=fff" alt="HTML">
    <img src="https://img.shields.io/badge/CSS-1655A2?logo=CSS3&logoColor=fff" alt="CSS">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=fff" alt="TypeScript">
  </div>

#### 興味のある言語

  <div class="icon">
    <img src="https://img.shields.io/badge/Rust-fff?logo=Rust&logoColor=000" alt="Rust">
  </div>

#### フレームワーク

  <div class="icon">
    <img src="https://img.shields.io/badge/React-282C34?logo=React" alt="React">
    <img src="https://img.shields.io/badge/Next.js-000?logo=Next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/Vue-1A1A1A?logo=Vue.js" alt="Vue.js">
    <img src="https://img.shields.io/badge/Sass-CF649A?logo=sass&logoColor=fff" alt="Sass">
  </div>

#### ツール

  <div class="icon">
    <img src="https://img.shields.io/badge/VSCode-209FF0?logo=Visual+Studio+Code&logoColor=fff"
      alt="Visual Studio Code">
    <img src="https://img.shields.io/badge/Git-F05032?logo=Git&logoColor=fff" alt="Git">
    <img src="https://img.shields.io/badge/Notion-fff?logo=Notion&logoColor=000" alt="Notion">
  </div>

<style scoped lang="scss">
.icon {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
