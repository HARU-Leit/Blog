export const CustomSidebar = () => {
  return {
    // アーカイブページ用のサイドバー
    '/archives/': [],
    // タグページ用のサイドバー
    '/tags/': [
      {
        text: 'タグ',
        items: [
          { text: 'プログラミング', link: '/tags/programming/' },
          { text: 'デザイン', link: '/tags/design/' },
        ],
      },
    ],
    '/profile/': [
      {
        text: 'お問い合わせ',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/HaruLeit2003' },
          { text: 'GitHub', link: 'https://github.com/HARU-Leit' },
          { text: 'GMail', link: 'mailto:haru.leit@gmail.com' },
        ],
      },
      {
        text: '支援 / Donate',
        items: [
          {
            text: 'By Me A Coffee',
            link: 'https://www.buymeacoffee.com/haru0609',
          },
        ],
      },
    ],
    '/': [
      {
        text: '関連タグ',
        items: [
          { text: 'プログラミング', link: '/tags/programming/' },
          { text: 'デザイン', link: '/tags/design/' },
        ],
      },
    ],
  }
}
